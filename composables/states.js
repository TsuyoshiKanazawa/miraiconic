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

  const formatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  //console.log(res)
  const newsItems = res.contents.map(item => {
    // ISO文字列を Date に変換
    const date = new Date(item.date)
    // UTC → JST (+9h)
    const formatted = formatter.format(date).replace(/\//g, ".");
    // yyyy.mm.dd 形式にフォーマット
    return {
      ...item,
      date: formatted
    }
  })
  //console.log(res.items)

  // state にセット
  useNewsItem().value = newsItems
  return newsItems
}

export const useLoading = () => useState('loading', () => false)