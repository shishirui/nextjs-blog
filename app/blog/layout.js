import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'
import Image from 'next/image'

const name = 'Rex Shi'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image
                    src="/images/profile.jpg"
                    width={144}
                    height={144}
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}
