import React, { useState } from 'react';
import ProfileList from '../components/ProfileList';
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container">
      <h1 className="text-center my-4">Profile Viewer</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProfileList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
