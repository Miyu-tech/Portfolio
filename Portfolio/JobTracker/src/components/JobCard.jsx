import { useJobs } from "../context/JobContext";
import "./JobCard.css";

function JobCard({ job }) {
  const { updateJobStatus, removeJob } = useJobs();

  return (
    <div className="job-card">
      <h3>{job.position}</h3>
      <p className="company-name">{job.company}</p>

      <span className={`status ${job.status}`}>{job.status}</span>

      <div className="job-card-actions">
        <select
          className="status-select"
          value={job.status}
          onChange={(e) => updateJobStatus(job.id, e.target.value)}
        >
          <option value="saved">Saved</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>

        <button className="delete-btn" onClick={() => removeJob(job.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;





    //     {/* <div className='job-card-header'>
    //         <h3>{job.position}</h3>
    //         <span className={`status-badge ${job.status}`}>
    //             {job.status}
    //         </span>
    //     </div>

    //     <p className='company-name'>{job.company}</p>
    // </div>     */}
