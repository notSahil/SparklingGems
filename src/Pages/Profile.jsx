import React, { useEffect, useState } from 'react';
import { Email, Person, Home } from '@mui/icons-material';
import { API_BASE_URL } from '../config/api';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data when the component mounts
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      // Retrieve JWT token from local storage
      const jwt = localStorage.getItem('jwt');

      // Check if JWT token is available
      if (!jwt) {
        throw new Error('JWT token is missing.');
      }

      // Make a GET request to fetch profile data
      const response = await fetch(`${API_BASE_URL}/api/users/profile`, {

        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwt}`, // Include JWT token in the Authorization header
          'Content-Type': 'application/json'
        }
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Error fetching profile data: ${response.statusText}`);
      }

      const data = await response.json();
      setProfileData(data); // Update state with the fetched profile data
    } catch (error) {
      console.error('Error fetching profile data:', error.message);
      setError(error.message);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.profileContainer}>
        <h1 style={styles.userProfileTitle}>User Profile</h1>
        {error ? (
          <p style={styles.errorMessage}>Error: {error}</p>
        ) : (
          profileData ? (
            <div style={styles.profileDetails}>
              <p style={styles.profileText}><Person style={{ color: '#E91E63' }} /> <strong>Name:</strong> {profileData.firstName} {profileData.lastName}</p>
              <p style={styles.profileText}><Email style={{ color: '#4CAF50' }} /> <strong>Email:</strong> {profileData.email}</p>
              <h2 style={styles.addressTitle}><Home style={{ color: '#FFC107' }} /> Saved  Addresses</h2>
              {profileData.addresses.map((address, index) => (
                <div key={address.id} style={styles.addressBox}>
                  <h3 style={styles.addressLabel}><Home style={{ color: '#FF5722' }} /> Address {index + 1}</h3>
                  <div style={styles.addressDetails}>
                    <p><strong>Street Address:</strong> {address.streetAddress}</p>
                    <p><strong>City:</strong> {address.city}</p>
                    <p><strong>State:</strong> {address.state}</p>
                    <p><strong>Zip Code:</strong> {address.zipCode}</p>
                    <p><strong>Mobile:</strong> {address.mobile}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={styles.loadingMessage}>Loading profile data...</p>
          )
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

const styles = {
  pageContainer: {
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    padding: '20px',
  },
  profileContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  userProfileTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
  loadingMessage: {
    fontStyle: 'italic',
  },
  profileDetails: {
    marginBottom: '20px',
  },
  profileText: {
    fontSize: '20px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  addressBox: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  },
  addressLabel: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  addressDetails: {
    marginLeft: '20px',
  },
};
