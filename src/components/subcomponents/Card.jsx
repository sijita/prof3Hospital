import React from "react";

export default function Card({ title, body }) {
  return (
    <div className="card bg-white shadow-lg h-full">
      <div className="card-body justify-center">
        <h2 className="card-title items-center gap-8">{title}</h2>
        {body}
      </div>
    </div>
  );
}
