import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-next-js',
        title: 'Getting started with next js',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the production framework for react which comes with SSR',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-next-js2',
        title: 'Getting started with next js',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the production framework for react which comes with SSR',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-next-js3',
        title: 'Getting started with next js',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the production framework for react which comes with SSR',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-next-js4',
        title: 'Getting started with next js',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the production framework for react which comes with SSR',
        date: '2022-02-10'
    },
];

function AllPostsPage() {

    return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage