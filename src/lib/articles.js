import { articles } from '@/lib/articleData'

export async function getAllArticles() {
  return [...articles].sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
