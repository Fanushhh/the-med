import Image from "next/image";
import { Interweave, Markup } from "interweave";
import Link from "next/link";
import { polyfill } from 'interweave-ssr';

polyfill();


export async function generateMetadata({params}){
  const {slug } = params;
  
    const response = await fetch(
      `https://dev.themed.ro/api/content/item/blogs/${slug}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.COCKPIT_API_KEY}`,
        },
        next: { revalidate: 180 },
      }
    );

    const blogData = await response.json();
    return {
      title: blogData.title,
      description: blogData.shortDesc,
    }
  
    
  
}

const fetchBlogPost = async (slug) => {
  try {
    const response = await fetch(
      `https://dev.themed.ro/api/content/item/blogs/${slug}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.COCKPIT_API_KEY}`,
        },
        next: { revalidate: 180 },
      }
    );

    // Check if the response status is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Attempt to parse the response as JSON
    const blogData = await response.json();
    return blogData;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

export default async function Page({ params }) {
  const {slug } = params;
  const blogPost = await fetchBlogPost(slug);
  
  return (
    <main className="blogPost flex flex-col items-center justify-start my-20 md:my-32 px-6 ">
    <section className="max-w-[1320px] w-full">
      
      <h1 className="my-10 text-center text-3xl md:text-5xl">{blogPost.title}</h1>
      <div className="">
        <Interweave content={blogPost.content} allowElements={true} />
      </div>
    </section>
    </main>
  );
}
