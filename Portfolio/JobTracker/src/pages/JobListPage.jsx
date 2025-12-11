// pages/JobListPage.jsx
import AddJobForm from "../components/AddJobForm";
import { useJobs } from "../context/JobContext";
import JobCard from "../components/JobCard";
import "./JobListPage.css";

function JobListPage() {
  const { jobs } = useJobs();

  return (
    <div className="job-list-container">
      <h1>Job Tracker</h1>

      <h2>Add Job</h2>
      <AddJobForm />

      <h2>Job List</h2>
      <div className="job-list">
        {jobs.length === 0 && <p>No jobs added yet.</p>}

        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
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


  //   
//       // addJob(company, position, status);



//  