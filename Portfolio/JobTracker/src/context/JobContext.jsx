// context/JobContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const JobsContext = createContext();


export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs? JSON.parse(savedJobs)
    : [
    { id: "1", company: "Malta Corp", position: "Frontend Engineer", status: "saved" },
    { id: "2", company: "Tech Malta", position: "Software Engineer", status: "applied" },
  ]
  });

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

//   const addJob = (job) => {
//     setJobs((prev) => [...prev, job]);
//   };

//   const updateJobStatus = (jobId, newStatus) => {
//     setJobs((prev) =>
//       prev.map((job) =>
//         job.id === jobId ? { ...job, status: newStatus } : job
//       )
//     );
//   };

//   const removeJob = (jobId) => {
//     setJobs((prev) => prev.filter((job) => job.id !== jobId));
//   };

//   return (
//     <JobsContext.Provider value={{ jobs, addJob, updateJobStatus, removeJob }}>
//       {children}
//     </JobsContext.Provider>
//   );
// }

// export function useJobs() {
//   return useContext(JobsContext);
// }
