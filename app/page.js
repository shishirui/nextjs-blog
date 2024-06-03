import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  return {
    title: "Rex Shi"
  }
}

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rex Shi</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Exploring Ideas and Innovations with me.
      </p>

      <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {allPostsData.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link href={post.id}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
