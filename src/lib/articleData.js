export const articles = [
  {
    slug: 'css-in-js',
    author: 'Rex Shi',
    date: '2024-06-02',
    title: '关于 CSS-in-JS 的介绍',
    description: '',
  },
  {
    slug: 'first',
    author: 'Rex Shi',
    date: '2024-06-01',
    title: '我的第一篇博客',
    description: 'My first blog.',
  },
]

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
)
