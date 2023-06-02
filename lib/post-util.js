import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const POST_DIR = path.join(process.cwd(), 'posts');

export function getPostData(filename) {
    const filePath = path.join(POST_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const postSlug = filename.replace(/\.md$/, '');

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const allPosts = fs.readdirSync(POST_DIR);

    // for (const file of allPosts) {
    //     const postData = getPostData(file);
    // }

    const allPostsArr = allPosts.map(post => {
        return getPostData(post);
    });

    const sortedPosts = allPostsArr.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}


export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}