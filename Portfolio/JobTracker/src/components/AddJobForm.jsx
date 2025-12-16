import { useState } from "react";
import { useJobs } from "../context/JobContext";
import "./AddJobForm.css"; // 必要なら

function AddJobForm() {
  const { addJob } = useJobs();
  const [date, setDate] = useState('');

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("saved");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now().toString(),
      company,
      position,
      status,
      date,
    };

    addJob(newJob);

    setCompany("");
    setPosition("");
    setStatus("saved");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">

      <input 
      type="date" 
      value={date} 
      onChange={(e) => setDate(e.target.value)}
      required 
      />

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="saved">Saved</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddJobForm;
