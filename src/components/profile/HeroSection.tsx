import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../types/user";

const HeroSection = () => {

  interface State {
    user: user | undefined;
  }

  const profile = useSelector((state: State) => (state.user));
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch()

  const fetchProfile = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: 'PROFILE',
          payload: data,
        })
        setError(null);
      } else {
        setError(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (error) {
    return <div className="text-danger text-center mt-4">{error}</div>;
  }

  if (!profile) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-5" style={{ position: "relative" }}>

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
                    <p className="mb-1 text-black ">
                      <strong>{profile.title}</strong>
                    </p>
                    <p className="mb-2 text-muted">{profile.area}</p>
                <div className="d-flex justify-content-center justify-content-md-start gap-2">
                  <Button variant="primary">Connect</Button>
                  <Button variant="outline-secondary">Message</Button>
                  <Button variant="outline-secondary">More</Button>
                    <Button variant="warning">
                      Edit
                    </Button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <Card className="mt-4 border-0">
              <Card.Body>
                  <p className="mb-0 text-muted">{profile.bio}</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
