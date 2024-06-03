import Date from '@/components/date'
import { getPostData, getAllPostIds } from '@/lib/posts'
import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'
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
    let postData;

    try {
        postData = await getPostData(params.id)
    }
    catch (err) {
        return <NotFound />
    }

    return (
        <>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <div className={styles.backToHome}>
                <Link href="/blog">
                    ← Back to home
                </Link>
            </div>
        </>
    )
}
