import React from "react";
import ResourceCard from "./ResourceCard";

function ResourceList({ resources, onDelete }) {
  return (
    <div style={listStyle}>
      {resources.length === 0 ? (
        <p>No resources yet. Share one! 📚</p>
      ) : (
        resources.map((r) => (
          <ResourceCard key={r.id} resource={r} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

export default ResourceList;
