import React, { useState } from 'react';

const AdminPanel = () => {
//   const [profiles, setProfiles] = useState([
//     { id: 1, name: "John Doe", address: "New York, USA" },
//     { id: 2, name: "Jane Smith", address: "London, UK" },
//   ]);
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");

//   const addProfile = () => {
//     setProfiles([...profiles, { id: profiles.length + 1, name, address }]);
//     setName("");
//     setAddress("");
//   };

//   const deleteProfile = (id) => {
//     setProfiles(profiles.filter((profile) => profile.id !== id));
//   };
// return (
//   <div className="container">
//   <h2>Admin Panel</h2>
//   <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//   <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
//   <button onClick={addProfile}>Add Profile</button>

//   <ul>
//     {profiles.map((profile) => (
//       <li key={profile.id}>
//         {profile.name} - {profile.address}
//         <button onClick={() => deleteProfile(profile.id)}>Delete</button>
//       </li>
//     ))}
//   </ul>
// </div>

const [profiles, setProfiles] = useState([
  { id: 1, name: "Rahul Sharma", location: "Bangalore", imageUrl: "" },
  { id: 2, name: "Priya Nair", location: "Mumbai", imageUrl: "" },
]);

return (
  <div>
    <h2>Admin Panel</h2>
    <ul>
      {profiles.map((profile) => (
        <li key={profile.id}>{profile.name} - {profile.location}</li>
      ))}
    </ul>
  </div>
  );
};

export default AdminPanel;
