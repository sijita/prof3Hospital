import React from "react";

export default function InputComp({label, type, placeholder}) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-lg font-semibold">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        required
      />
    </div>
  );
}
