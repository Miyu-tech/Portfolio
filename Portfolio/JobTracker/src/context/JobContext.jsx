import { createContext, useContext, useSTate } from 'react';

const JobsContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([
    // { id: '1', company: 'Malta Corp', position: 'Frontend engineer', status:'saved'},
    // { id: '2', company: 'Tech Malta', position: 'Software engineer', status:'applied'},
  ]);

    const addJob = (job) => {
        setJobs((prev) => [...prev, job])
    };
    // const newJob = {
    //   id: Date.now().toString(),
    //   company,
    //   position,
    //   status,
    // };
    // setJobs([...jobs, newJobs]);
    // };

    const updateStatus = (jobId, newStatus) => {
        setJobs((prev) => 
        prev.map((job) =>
        job.id === jobId ? {...job, status: newStatus } : job
    )
  );
};

const removeJob = (jobId) => {
    setJobs((prev) => prev.filter((job) => job.id !== jobId));
};

    return (
        <JobsContext.Provider 
        value={{jobs, addJob, updateJobStatus, removeJob }}
        >
          {children}
        </JobsContext.Provider>
    );
}

export function useJobs() {
    return useContext(JobContext);
}