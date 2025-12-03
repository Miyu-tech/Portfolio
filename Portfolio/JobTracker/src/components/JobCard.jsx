import './JobCard.css';

function JobCard ({ job }) {
    return (
    <div className='job-card'>
        <div className='job-card-header'>
            <h3>{job.position}</h3>
            <span className={`status-badge ${job.status}`}>
                {job.status}
            </span>
        </div>

        <p className='company-name'>{job.company}</p>
    </div>    
    );
}


export default JobCard;