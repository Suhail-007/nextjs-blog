import { getPostData, getPostsFiles } from '../../lib/post-util';

import PostContent from '../../components/posts/post-detail/post-content';
import Head from 'next/head';

export default function PostDetails({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent {...post} />
        </>
    )
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 3600
    }
}

export function getStaticPaths() {
    const postsFileNames = getPostsFiles();

    const slugs = postsFileNames.map(post => post.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => {
            return {
                params: {
                    slug,
                }
            }
        }),
        fallback: false
    }
}