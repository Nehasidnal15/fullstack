import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/resources";

function useResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  // Load resources
  useEffect(() => {
    async function fetchResources() {
      try {
        setLoading(true);
        const res = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResources(res.data);
      } catch {
        setError("Failed to load resources");
      } finally {
        setLoading(false);
      }
    }
    fetchResources();
  }, []);

  // Add resource
  const addResource = async (title, link) => {
    try {
      const res = await axios.post(
        API_URL,
        { title, link },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResources([...resources, res.data]);
    } catch {
      setError("Failed to add resource");
    }
  };

  // Delete resource
  const deleteResource = async (resourceId) => {
    try {
      await axios.delete(`${API_URL}/${resourceId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResources(resources.filter((r) => r.id !== resourceId));
    } catch {
      setError("Failed to delete resource");
    }
  };

  return { resources, addResource, deleteResource, loading, error };
}

export default useResources;
