import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function QueueForm({ onAdd }) {
  const [name, SetName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    SetName("");
    setService("");
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <input
          type="text"
          name="customer-input"
          value={name}
          placeholder="Customer name"
          onChange={(e) => SetName(e.target.value)}
        />
      </form>
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="">Select Option</option>
        <option value="consultation">Consultation</option>
        <option value="payment">Payment</option>
        <option value="support">Support</option>
      </select>
      <button type="submit" onClick={handleSubmit}>
        {" "}
        <FaUserPlus /> Add Customer
      </button>
    </>
  );
}
