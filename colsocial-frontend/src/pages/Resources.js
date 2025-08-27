import React from "react";
import useResources from "../hooks/useResources";
import ResourceForm from "../components/ResourceForm";
import ResourceList from "../components/ResourceList";

function Resources() {
  const { resources, addResource, deleteResource } = useResources();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📚 Study Resources</h2>
      <ResourceForm onAdd={addResource} />
      <ResourceList resources={resources} onDelete={deleteResource} />
    </div>
  );
}

export default Resources;
