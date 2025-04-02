import React from "react";
import MapComponents from "./MapComponents";
import "./ProfileCard.css";
const ProfileCard = ({ profile }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={profile.image} className="card-img-top" alt={profile.name} />
        <div className="card-body">
          <h5 className="card-title">{profile.name}</h5>
          <p className="card-text">{profile.description}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <MapComponents address={profile.address} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
