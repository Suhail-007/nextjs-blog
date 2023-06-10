import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

import PostHeader from './post-header';

import styles from './post-content.module.css';

PrismLight.registerLanguage('js', js);

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

        code(code) {
            const { children, className } = code;
            return (
                <PrismLight style={atomDark} children={children} language='javascript' />
            )
        }
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