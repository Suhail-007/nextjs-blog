import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

import styles from './post-content.module.css';

function PostContent({slug, image, content, title}) {
    const imagePath = `/images/posts/${slug}/${image}`;

    return (
        <article className={styles.content}>
            <PostHeader title={title} image={imagePath} />


            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;