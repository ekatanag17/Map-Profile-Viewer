import React from "react";
import ProfileCard from "./ProfileCard";

const profilesData = [
  {
    id: 1,
    name: "Amit Vyas",
    address: "Pune, India",
    description: "Software Engineer specializing in frontend development.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Geetha Gowda",
    address: "Bangalore, India",
    description: "UI/UX designer with a passion for creativity.",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    id: 3,
    name: "Rahul Verma",
    address: "Delhi, India",
    description: "Full Stack Developer and open-source enthusiast.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Meenakshi Iyer",
    address: "Chennai, India",
    description: "Mobile App Developer with expertise in React Native.",
    image: "https://randomuser.me/api/portraits/women/95.jpg",
  },
  {
    id: 5,
    name: "SaiCharan Pinna",
    address: "Hyderabad, India",
    description: "Cloud Engineer specializing in AWS and DevOps.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const ProfileList = ({ searchQuery }) => {
  const filteredProfiles = profilesData.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="row">
      {filteredProfiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
