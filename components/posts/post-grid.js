import PostItem from './post-item';
import styles from './posts-grid.module.css';

export default function PostGrid({posts}) {

    return (
        <ul className={styles.grid}>
            {posts.map(post => <PostItem  key={post.slug} {...post} />)}
        </ul>
    )
}
