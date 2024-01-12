export function LoadMoreNews(articles, allNews, initialNew, newPerPage) {
  articles.push(...allNews.slice(initialNew, newPerPage))
  return {articles: articles, initialNew: initialNew + 6, newPerPage: newPerPage + 6}
}