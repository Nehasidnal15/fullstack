import { useState, useEffect } from "react";
import axios from "axios";

function useForums() {
  const [forums, setForums] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/forums", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setForums(res.data))
    .catch(err => console.error(err));
  }, [token]);

  const addForum = async ({ title, description }) => {   // ✅ match ForumForm
    try {
      const res = await axios.post(
        "http://localhost:5000/forums",
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setForums([...forums, res.data]);
    } catch (err) {
      console.error("Error adding forum:", err.response?.data || err.message);
    }
  };

  const deleteForum = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/forums/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setForums(forums.filter(f => f._id !== id));
    } catch (err) {
      console.error("Error deleting forum:", err.response?.data || err.message);
    }
  };

  return { forums, addForum, deleteForum };
}

export default useForums;
