import Link from 'next/link';
import Image from 'next/image';

import styles from './post-item.module.css';

export default function PostItem({ title, image, excerpt, date, slug }) {
    const FormattedDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <div className={styles.image}>
                    <Image src={imagePath} alt={title} fill='true' />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{FormattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}
