import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { TextInput } from "./TextInput.jsx";
import { SelectInput } from "./SelectInput.jsx";
import "../queue-form.css";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Customer name is required";
    if (!service) newErrors.service = "Please select a service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onAdd({ name, service });
    setName("");
    setService("");
    setErrors({});
  };

  return (
    <form className="queue-form" onSubmit={handleSubmit}>
      <h2>Add to Queue</h2>

      <TextInput
        label="Customer Name"
        value={name}
        placeholder="Enter customer name"
        onChange={setName}
        error={errors.name}
      />

      <SelectInput
        label="Service Type"
        value={service}
        onChange={setService}
        error={errors.service}
        options={[
          { value: "consultation", label: "Consultation" },
          { value: "payment", label: "Payment" },
          { value: "support", label: "Support" },
        ]}
      />

      <button type="submit">
        <FaUserPlus />
        Add Customer
      </button>
    </form>
  );
}
