import Head from "next/head";
import Image from "next/image";

import { PostCard, Categories, PostWidget } from "../components";

const posts = [
  { title: "Web development", excerpt: "Learn web development" },
  { title: "Tailwind css", excerpt: "Learn Tailwind CSS" },
];

const Home = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:gird-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
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
};

export default Home;
