import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

import { getFeaturedPosts } from '../lib/post-util';

export default function Homepage({ posts }) {

    return (
        <>
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