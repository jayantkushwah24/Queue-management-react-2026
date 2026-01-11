import React from "react";
import "../queue-display.css";

const QueueDisplay = ({ queue = [], updateStatus, removeFromQueue }) => {
  if (queue.length === 0) {
    return (
      <div className="queue-container empty">
        <h2>Current Queue</h2>
        <p>No customers in the queue</p>
      </div>
    );
  }

  return (
    <div className="queue-container">
      <h2>Current Queue</h2>

      <ul className="queue-list">
        {queue.map((customer) => {
          const { id, name, service, status } = customer;

          return (
            <li key={id} className="queue-card">
              <div className="queue-info">
                <h3>{name}</h3>
                <span className="service">{service}</span>
                <span className={`status ${status.toLowerCase()}`}>
                  {status}
                </span>
              </div>

              <div className="queue-actions">
                <button
                  className="btn-secondary"
                  onClick={() => updateStatus(id)}
                >
                  Update Status
                </button>

                <button
                  className="btn-danger"
                  onClick={() => removeFromQueue(id)}
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QueueDisplay;
