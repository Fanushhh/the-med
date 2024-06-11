const otherTeam = [
  {
    id: 'dt-1',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
  {
    id: 'dt-2',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
  {
    id: 'dt-3',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
  {
    id: 'dt-4',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
  {
    id: 'dt-5',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
  {
    id: '6',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
  {
    id: '7',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
  {
    id: '8',
    name: "DR. RALUCA ȘANDOR - SAMSON",
    role: "Specialist Endodonție ",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp",
  },
];

export const TeamMembers = () => {
  return (
    <div className="grid-container max-w-[1320px] my-10">
      {otherTeam.map((member) => {
        return (
          <div
            key={member.id}
            className="grid-item max-w-[300px] w-full text-center"
          >
            <img className="" src={member.img} alt={member.name} />
            <p className="mt-2 font-bold">{member.name}</p>
            <p className="text-[var(--accent)]">{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};
