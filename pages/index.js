import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

import { getFeaturedPosts } from '../lib/post-util';
import Head from 'next/head';

export default function Homepage({ posts }) {

    return (
        <>
        <Head>
            <title>Mohd's blog</title>
            <meta name="description" content="i Post about programming and web development" />
        </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    )
}

export const getStaticProps = function () {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60
    }
}