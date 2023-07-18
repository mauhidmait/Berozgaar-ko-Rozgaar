import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
  const history = useHistory();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const profileData = await response.json();
          setProfile(profileData);
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
    history.push('/login'); // Redirect to login page
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

export default ProfilePage;
