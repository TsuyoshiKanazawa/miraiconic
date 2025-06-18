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
  const { $microcms } = useNuxtApp()
  const res = await $microcms.get({
    endpoint: 'news',
    queries: {
      orders: 'system:default',
      limit: 100,
    }
  })
  //console.log(res)
  const newsItems = res.contents.map(item => {
    // ISO文字列を Date に変換
    const d = new Date(item.date)
    // UTC → JST (+9h)
    d.setHours(d.getUTCHours() + 9)
    // 各要素を取り出し
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    // yyyy.mm.dd 形式にフォーマット
    return {
      ...item,
      date: `${yyyy}.${mm}.${dd}`
    }
  })
  //console.log(res.items)

  // state にセット
  useNewsItem().value = newsItems
  return newsItems
}

export const useLoading = () => useState('loading', () => false)