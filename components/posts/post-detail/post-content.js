import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

import styles from './post-content.module.css';

function PostContent({ slug, image, content, title }) {
    const imagePath = `/images/posts/${slug}/${image}`;

    const customComponents = {
        p({ node }) {
            const element = node.children[0];

            if (element.tagName !== 'img') return <p>{element.value}</p>

            const { src, alt } = element.properties;

            return (

                <div>
                    <Image
                        className={styles.image}
                        src={`/images/posts/${slug}/${src}`}
                        alt={alt}
                        width={600}
                        height={300} />
                </div>
            )
        },
    }

    return (
        <article className={styles.content}>
            <PostHeader title={title} image={imagePath} />

            <ReactMarkdown components={customComponents}>
                {content}
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;