import Image from "next/image";
import Link from "next/link";

export const fetcher = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        
        "Content-Type": "application/json",
        "api-key": `${process.env.COCKPIT_API_KEY}`,
      },
      // next:{revalidate:180}
    });

    // Check if the response status is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Attempt to parse the response as JSON
    const blogData = await response.json();
    return blogData;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
export const Blog = async () => {
  const blogData = await fetcher(
    "https://dev.themed.ro/api/content/items/blogs"
  );

  return (
    <section className="mt-32 md:mt-40 mb-10 text-center max-w-[1320px] mx-auto p-4">
      <div>
        <h1 className="text-4xl mb-6">Blog - I talk teeth</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-10 my-10 grid-cols-1 items-start place-items-center">
        {blogData &&
          blogData.map((post, index) => {
            
            return (
              <div key={index} className="mt-4 max-w-[500px] w-full">
                <Image
                  src={`https://dev.themed.ro/storage/uploads${post.image.path}`}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover"
                />
                <div className="grid justify-items-center">
                  <h2 className="text-2xl mt-4">{post.title}</h2>
                  <p className="my-4 line-clamp-1">{post.shortDesc}</p>
                  <Link
                    href={`/info/blog/${post._id}`}
                    className="!border hover:bg-[var(--accent)] hover:text-white transition-colors hover:border-b-1 border-[var(--accent)] text-[var(--accent)] p-2 w-1/2"
                  >
                    Citeste
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
