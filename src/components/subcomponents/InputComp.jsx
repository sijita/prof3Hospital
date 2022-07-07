import React from "react";

export default function InputComp({
  refer,
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-lg font-semibold">{label}</span>
      </label>
      <input
        ref={refer}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full"
        required
      />
    </div>
  );
}
