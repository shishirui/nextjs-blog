import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/date'
import Link from 'next/link'
import utilStyles from '@/styles/utils.module.css'

export async function generateMetadata({ params }) {
    return {
        title: "Blog"
    }
}

export default function BlogPage() {
    const allPostsData = getSortedPostsData();
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/blog/${id}`}>
                            {title}
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </section>
    )
}
