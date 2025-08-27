import React, { useState } from "react";

function ResourceForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !link) return;
    onAdd(title, link);
    setTitle("");
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Resource Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="url"
        placeholder="Resource Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={btnStyle}>Add</button>
    </form>
  );
}

const formStyle = {
  margin: "20px 0",
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  flexWrap: "wrap"
};

const inputStyle = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  flex: "1"
};

const btnStyle = {
  background: "#0077b6",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer"
};

export default ResourceForm;
