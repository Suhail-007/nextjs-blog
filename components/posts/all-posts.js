import PostGrid from "./post-grid";

import styles from './all-posts.module.css';

export default function AllPosts({ posts }) {

    return (
        <section className={styles.posts}>
            <h1>All Posts</h1>

            <PostGrid posts={posts} />
        </section>
    )
}
