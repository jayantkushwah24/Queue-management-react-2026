import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
import "./App.css";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue((prev) => [
      ...prev,
      {
        ...customer,
        id: Date.now(),
        status: "waiting",
      },
    ]);
  };

  const updateStatus = (id) => {
    setQueue((prev) =>
      prev.map((customer) => {
        if (customer.id !== id) return customer;

        const nextStatus =
          customer.status === "waiting"
            ? "in-progress"
            : customer.status === "in-progress"
            ? "completed"
            : "completed";

        return { ...customer, status: nextStatus };
      })
    );
  };

  const removeFromQueue = (id) => {
    setQueue((prev) => prev.filter((customer) => customer.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main className="app-main">
        <QueueForm onAdd={addToQueue} />

        <QueueDisplay
          queue={queue}
          updateStatus={updateStatus}
          removeFromQueue={removeFromQueue}
        />
      </main>
    </div>
  );
}

export default App;
