/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


import { Button, Card, Form } from "react-bootstrap";
import BackgroundImageFetcher from "./BackgroundImageFetcher"; 
import { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newProfileData, setNewProfileData] = useState<any>(profile);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc"; 

        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
          setError(null);
        } else {
          setError(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (err) {
        setError("Failed to fetch profile. Please check your network connection or token.");
      }
    };

    fetchProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setNewProfileData(profile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProfileData({
      ...newProfileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProfileData),
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        setIsEditing(false);
      } else {
        setError(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError("Failed to save profile changes.");
    }
  };

  if (error) {
    return <div className="text-danger text-center mt-4">{error}</div>;
  }

  if (!profile) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-5" style={{ position: "relative" }}>
      <BackgroundImageFetcher /> 
      <div className="row justify-content-start">
        <div className="col-lg-8 col-md-6">
          <div
            className="bg-white rounded-lg p-4"
            style={{
              position: "relative",
              zIndex: 1,
              paddingTop: "80px",
            }}
          >
            <div className="d-flex flex-column flex-md-row align-items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0 mb-3 mb-md-0 me-md-4">
                <img
                  src={profile.image || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="rounded-circle border border-secondary"
                  style={{
                    width: "150px",
                    height: "150px",
                    zIndex: 2, 
                  }}
                />
              </div>

              {/* Profile Details */}
              <div className="flex-grow-1 text-center text-md-start">
                {isEditing ? (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        value={newProfileData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="surname"
                        value={newProfileData.surname}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="title"
                        value={newProfileData.title}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="area"
                        value={newProfileData.area}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </>
                ) : (
                  <>
                    <h1 className="h4 mb-1 fw-bold">
                      {profile.name} {profile.surname}
                      <Button
                        variant="link"
                        className="btn-light border-2 rounded-4 m-2 border-primary text-decoration-none"
                        style={{ borderStyle: "dashed" }}
                      >
                        Aggiungi badge di verifica
                      </Button>
                    </h1>
                    <p className="mb-1 text-black "><strong>{profile.title}</strong></p>
                    <p className="mb-2 text-muted">{profile.area}</p>
                  </>
                )}
                <div className="d-flex justify-content-center justify-content-md-start gap-2">
                  <Button variant="primary">Connect</Button>
                  <Button variant="outline-secondary">Message</Button>
                  <Button variant="outline-secondary">More</Button>
                  {isEditing ? (
                    <Button variant="success" onClick={handleSave}>
                      Save
                    </Button>
                  ) : (
                    <Button variant="warning" onClick={handleEdit}>
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <Card className="mt-4 border-0">
              <Card.Body>
                {isEditing ? (
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="bio"
                      value={newProfileData.bio}
                      onChange={handleChange}
                    />
                  </Form.Group>
                ) : (
                  <p className="mb-0 text-muted">{profile.bio}</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


