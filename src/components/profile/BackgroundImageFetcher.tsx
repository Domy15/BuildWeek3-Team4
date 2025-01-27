import { useState, useEffect } from "react";

const BackgroundImageFetcher: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        
        const response = await fetch(
          "https://api.unsplash.com/photos/random?client_id=CmJ4Zwk7XfzAjqgxnV6Eth-zH5Q0dwHDTiSjrHJcm_A&count=1"
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${response.statusText}, ${errorText}`);
        }

        const data = await response.json();
        console.log("API Response:", data); 

        if (Array.isArray(data) && data.length > 0 && data[0].urls && data[0].urls.regular) {
          
          setBackgroundImage(data[0].urls.regular);
        } else {
          throw new Error("No photos found.");
        }
      } catch (err) {
        console.error("Error fetching background image:", err);
        setError("Failed to fetch background image.");
      } finally {
        setLoading(false);
      }
    };

    fetchBackgroundImage();
  }, []);

  if (loading) {
    return <div>Loading background...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "50%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        zIndex: -1, 
      }}
    />
  );
};

export default BackgroundImageFetcher;
