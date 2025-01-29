import React, { useEffect, useState } from "react";
import axios from "axios";

function CreatorDashboard() {
  const [username, setUsernmae] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:3000/api/v1/creator/get-name",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data.username.username);
        setUsernmae(res.data.username.username);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return <div>Welcome back {username}</div>;
}

export default CreatorDashboard;
