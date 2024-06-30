
import TeamMember from "../TeamMember/TeamMember";
const fetchData = async () => {
  const data = await fetch(
    "https://dev.themed.ro/api/content/items/teams",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       Authorization: `Bearer ${process.env.COCKPIT_API_KEY}`,
      },
      next:{revalidate:180},
    }
  );
  
  const response = await data.json();
  return response;
}


export const TeamHero = async () => {
  const doctorData = await fetchData();
  

  return (
    <section className="py-10 bg-[var(--primary)] ">
    <div className="mx-auto max-w-[1320px]">
    <h1 className="py-10 md:py-20 mt-20 text-center text-3xl md:text-5xl">
        Cunoaste echipa <span className="uppercase"><br />the med</span>
      </h1>
      <TeamMember doctors={doctorData} />
    </div>
     
    </section>
  );
};
