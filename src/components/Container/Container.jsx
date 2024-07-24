import Image from "next/image";

export const Container = ({ children }) => {
  return (
    <section className="relative py-10 md:px-10 max-w-[1320px] w-full mx-auto p-4">
      <Image
        src="https://newsite.themed.ro/uploads/filosofie/diff-resized.png"
        alt="differences"
        width={500}
        height={500}
        className="absolute max-w-[500px] w-full top-0 right-0 md:right-[-50px] z-[-1] h-full object-cover"
      />
      {children}
    </section>
  );
};
