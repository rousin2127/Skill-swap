import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [message, setMessage] = useState('');

  const handleUpdate = () => {
    if (!user) return;

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setMessage('✅ Profile updated successfully!');
      })
      .catch((error) => {
        // console.error(error);
        setMessage('❌ Failed to update profile.');
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-10 h-screen mt-[50px]">
      {/* Left side */}
      <div className="w-full md:w-[500px] flex flex-col items-center border rounded-2xl shadow-lg p-6 bg-base-100">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/150'}
          alt="User"
          className="w-32 h-32 rounded-full border mb-4"
        />
        <h2 className="text-2xl font-bold">{user?.displayName || 'No Name'}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Right side */}
      <div className="w-full md:w-[500px] border rounded-2xl shadow-lg p-6 bg-base-100">
        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
        <div className="form-control mb-3">
          <label className="label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter new name"
          />
        </div>
        <div className="form-control mb-3">
          <label className="label">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter new photo URL"
          />
        </div>
        <button className="btn btn-neutral mt-2" onClick={handleUpdate}>
          Update Profile
        </button>

        {message && <p className="mt-3 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
