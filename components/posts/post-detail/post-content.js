import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

import styles from './post-content.module.css';

const DUMMY_POSTS = {
    slug: 'getting-started-with-next-js',
    title: 'Getting started with next js',
    image: 'getting-started-nextjs.png',
    content: '# This is the first post',
    date: '2022-02-10'
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

    return (
        <article className={styles.content}>
            <PostHeader title={DUMMY_POSTS.title} image={imagePath} />


            <ReactMarkdown>
                {DUMMY_POSTS.content}
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;