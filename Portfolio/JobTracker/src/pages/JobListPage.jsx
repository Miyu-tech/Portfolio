import { useState } from "react";
import { useJobs } from "../context/JobContext";
import JobCard from "../components/JobCard";
import './JobListPage.css';

function JobListPage() {
  const { jobs } = useJobs();

return (
  <div className="job-list-container">
    <h2>Job List</h2>
    <div className="job-list">
      {jobs.length === 0 && <p>No Jobs added yet.</p>}
      {jobs.map(job => (
        <jobCard key={job.id} job={job} />
      ))}
  </div>
</div>
);
}

export default JobListPage;




  //   const deleteJob = (id) => {
  //     setJobs(jobs.filter(job => job.id !== id));
  //   };

  //   const updateStatus = (id, newStatus) => {
  //     setJobs(
  //       jobs.map(job => 
  //         job.id === id ? {...job, status: newStatus } : job
  //       )
  //     );
  //   };

  //   setJobs([...jobs, newJob]);

  //   setCompany('');
  //   setPosition('');
  //   setStatus('saved');
  // };


  //   const [company, setCompany] = useState('');
//   const [position, setPosition] = useState('');
//   const [status, setStatus] = useState('saved');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//       // addJob(company, position, status);

//     const newJob = {
//     id: Date.now(),
//     company,
//     position,
//     status,
//   };

//   addJob(newJob);

//   setCompany('');
//   setPosition('');
//   setStatus('saved');
// };

//   return (
//     <div className='job-list-container'>
//       <h1>Job Tracker</h1>

//       <h2>Add Job</h2>
//       <form onSubmit={handleSubmit} className="job-form">
//         <input 
//           type="text" 
//           placeholder="Company" 
//           value={company}
//           onChange={(e) => setCompany(e.target.value)}
//           required
//         />

//         <input 
//           type="text" 
//           placeholder="Position" 
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//           required
//         />

//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value='saved'>Saved</option>
//           <option value='applied'>Applied</option>
//           <option value='interview'>Interview</option>
//           <option value='offer'>Offer</option>
//           <option value='rejected'>Rejected</option>
//         </select>

//         <button type="submit">Add</button>
//       </form>