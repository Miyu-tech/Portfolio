import { useState } from "react";
import './JobListPage.css';

function JobListPage() {
  const [jobs, setJobs] = useState([
    { id: '1', company: 'Malta Corp', position: 'Frontend engineer', status:'saved'},
    { id: '2', company: 'Tech Malta', position: 'Software engineer', status:'applied'},
  ]);

  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('saved');

  const addJob = (e) => {
    e.preventDefault();
    
    const newJob = {
      id: Date.now().toString(),
      company,
      position,
      status,
    };

    const deleteJob = (id) => {
      setJobs(jobs.filter(job => job.id !== id));
    };

    const updateStatus = (id, newStatus) => {
      setJobs(
        jobs.map(job => 
          job.id === id ? {...job, status: newStatus } : job
        )
      );
    };

    setJobs([...jobs, newJob]);

    setCompany('');
    setPosition('');
    setStatus('saved');
  };

  return (
    <div className='container'>
      <h1>Job Tracker</h1>

      <h2>Add Job</h2>
      <form onSubmit={addJob} className="job-form">
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
          <option value='saved'>Saved</option>
          <option value='applied'>Applied</option>
          <option value='interview'>Interview</option>
          <option value='offer'>Offer</option>
          <option value='rejected'>Rejected</option>
        </select>
        <button type="submit">Add</button>
      </form>

      <h2>Job List</h2>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className='job-card'>
            <h3>{job.position}</h3>
            <p>{job.company}</p>

            <span className={`status ${job.status}`}>{job.status}</span>

            <select
            className="status-select"
            value={job.status}
            onChange={(e) => updateStatus(job.id, e.target.value)}
            >
              <option value="saved">Saved</option>
              <option value="applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
            
             <button className='delete-btn'
          onClick={() => removeJob(job.id)}>
            Delete
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListPage;
