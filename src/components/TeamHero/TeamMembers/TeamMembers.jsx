import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";
import Image from "next/image";
import TeamMember from "@/components/TeamMember/TeamMember";
import { fetcher } from "@/components/Blog/Blog";

export const TeamMembers = async () => {

  const doctorData = await fetcher("https://dev.themed.ro/api/content/items/othersTeam");
  
  return (
    <div className="max-w-[1320px] mx-auto">
      <TeamMember doctors={doctorData} gridContainer="grid-container"/>

    </div>
      
      
    
  );
};
