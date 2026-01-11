import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    // update status
  };
  const removeFromQueue = (id) => {
    // add to queue
  };

  return (
    <>
      <div className="app">
        <header>
          <h1>Queue Management System</h1>
          <p>Manage you customers efficiently.</p>
        </header>
        <main>
          <QueueForm onAdd={addToQueue} />
          <QueueDisplay />
        </main>
      </div>
    </>
  );
}

export default App;
