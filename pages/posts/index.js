import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

function AllPostsPage({ allPosts }) {

    return <AllPosts posts={allPosts} />
}

export const getStaticProps = function () {
    const allPosts = getAllPosts();

    return {
        props: {
            allPosts
        },
        revalidate: 60,
    }
}

export default AllPostsPage
