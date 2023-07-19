import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://127.0.0.1:5173/api/profile', {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response);
        if (response.ok) {
          const profileData = await response.json();
          console.log(profileData);
          setProfile(profileData.profileData);
        } else {
          // Profile fetching failed
          // Handle error
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/login'); // Redirect to login page
  };

  if (profile === null) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {profile.username}</p>
      {/* Display other profile information */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
