const blogPosts = [
    {
      title: "Titlu articol blog 1",
      description:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice",
      img: "https://site.themed.ro/uploads/images/top-servicii-implant-dentar-jpg_8DW6.webp",
    },
    {
      title: "Titlu articol blog 2",
      description:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice",
      img: "https://site.themed.ro/uploads/images/s2-jpg_W2A8.webp",
    },
    {
      title: "Titlu articol blog 3",
      description:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice",
      img: "https://site.themed.ro/uploads/images/s1-jpg_8VO2.webp",
    },
    {
      title: "Titlu articol blog 4",
      description:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice",
      img: "https://site.themed.ro/uploads/images/top-servicii-endodontie-jpg_QTFM.webp",
    },
  ];

export const Blog = () => {

    return (<section className="mt-32 mb-10 text-center max-w-[1320px] mx-auto p-4">
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
    <div className="grid sm:grid-cols-2 gap-10 my-10 grid-cols-1  place-items-center">
      {blogPosts.map((post, index) => {
        return (
          <div key={index} className="mt-4 ">
            <img
              src={post.img}
              alt={post.title}
              className="max-w-[500px] w-full max-w-full"
            />
            <div>
              <h2 className="text-2xl mt-4">{post.title}</h2>
              <p className="mt-4">{post.description}</p>
              <button className="border border-[var(--accent)] text-[var(--accent)] p-2 w-1/2 my-2">Citeste</button>
            </div>
          </div>
        );
      })}
    </div>
  </section>)
}