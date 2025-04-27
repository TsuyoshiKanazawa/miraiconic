// 認証ユーザー（firebaseのAuthentication）
export const useIsMobile = () => useState('isMobile', () => false)

export const useNewsItem = () => useState('newsItem', () => null)

export const useContactItem = () => useState('contactItem', () => {
  return {
    name: '',
    nameFurigana: '',
    companyName: '',
    email: '',
    emailCheck: '',
    phoneNumber: '',
    message: ''
  }
})

export const useFetchNewsItem = async () => {
  const { $newtClient } = useNuxtApp()
  const res = await $newtClient.getContents({
    appUid: 'cpSite',
    modelUid: 'news',
    query: {
      select: ['title', 'date', 'mainText', '_id', 'id'],
      order: ['-_sys.customOrder']
    }
  })
  const newsItems = res.items.map(item => {
    const d = new Date(item.date)
    d.setHours(d.getUTCHours() + 9)
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return { ...item, date: `${yyyy}.${mm}.${dd}` }
  })
  useNewsItem().value = newsItems
  return newsItems
}
