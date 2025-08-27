import React, { useState } from "react";

function ForumForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAdd({ title, description });   // ✅ send object, not separate args
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Forum Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Forum Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={btnStyle}>Post</button>
    </form>
  );
}

const formStyle = { display: "flex", gap: "10px", marginBottom: "20px" };
const inputStyle = { flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" };
const btnStyle = { background: "#0077b6", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" };

export default ForumForm;
