import Head from "next/head";

import { PostCard, Categories, PostWidget } from "../components";

import { getPosts } from "../services";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relatve top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

const users = [
  { name: "John", email: "john@exampdot com" },
  { name: "umar", email: "umar@examp dot com" },
];

users.map((user) => {
  return {
    name: user.name,
    email: user.email,
    posts: user.posts,
    users: user.users,
  };
}); //
