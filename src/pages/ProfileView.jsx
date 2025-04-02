import React from 'react';
import { useParams } from 'react-router-dom';
import profiles from '../data/profiles';
import MapComponent from '../components/MapComponents';

const ProfileView = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === Number(id));

  return (
    <div className="container text-center">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} className="img-thumbnail" />
      <p>{profile.description}</p>
      <MapComponent location={profile.address} />
    </div>
  );
};

export default ProfileView;
