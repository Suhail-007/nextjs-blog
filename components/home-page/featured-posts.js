import styles from './featured-posts.module.css';
import PostGrid from '../posts/post-grid';

export default function FeaturedPosts(props) {

    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={props.posts} />
        </section>

    )
}