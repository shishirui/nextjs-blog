import { getPostData, getAllPostIds } from '@/lib/posts'
import NotFound from '@/app/not-found'
import Link from 'next/link'

export async function generateMetadata({ params }) {
    try {
        const postData = await getPostData(params.id)
        return {
            title: postData.title
        }
    } catch (error) {
        return {}
    }
}

export async function generateStaticParams() {
    try {
        const paths = getAllPostIds();
        return paths.map((path) => ({
            id: path.id,
        }));
    } catch (err) {
        return [];
    }
}

export default async function PostPage({ params }) {
    let post;
    try {
        post = await getPostData(params.id)
    } catch (err) {
        return <NotFound />
    }

    return (
        <div>
            <div className="mb-10 flex">
                <Link href="/" className="text-base leading-7 text-indigo-600"><span aria-hidden="true">←</span> Blog </Link>
            </div>

            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                    </time>
                </div>
                <div className="group relative">
                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <Link href={post.id}>
                            {post.title}
                        </Link>
                    </h3>
                    <div className="markdown space-y-4 mt-6 max-w-xl text-base leading-7 text-gray-700 lg:col-span-7" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </div>
            </article>
        </div>
    )
}
