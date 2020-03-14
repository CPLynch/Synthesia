import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        width: "100%"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px 30px",
          borderRadius: "40px",
          fontSize: "18px",
          border: "3px solid black",
          fontWeight: "bold"
        }}
      >
        Loading...
      </div>
    </div>
  );
}
