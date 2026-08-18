import { articleBySlug } from '@/lib/articleData'

const article = articleBySlug['css-in-js']

export const metadata = {
  title: article.title,
  description: article.description,
}

export default function ArticleSegmentLayout({ children }) {
  return children
}
