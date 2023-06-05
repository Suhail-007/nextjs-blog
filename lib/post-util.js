import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { log } from 'console';

const POST_DIR = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
    return fs.readdirSync(POST_DIR);
}

export function getPostData(postIdentifier) {

    const postSlug = postIdentifier.replace(/\.md$/, '');

    const filePath = path.join(POST_DIR, `${postSlug}.md`);

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);


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