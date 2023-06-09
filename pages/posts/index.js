import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

function AllPostsPage({ allPosts }) {

    return <>
    <Head>
        <title>All Posts</title>
        <meta name="description" content="Lists of all programming-related tutorials and posts" />
    </Head>
    <AllPosts posts={allPosts} />
    </>
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
