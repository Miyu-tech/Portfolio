import { createContext, useContext, useSTate } from 'react';

const JobsContext = createContext();

export function JobListPage() {
  const [jobs, setJobs] = useState([
    { id: '1', company: 'Malta Corp', position: 'Frontend engineer', status:'saved'},
    { id: '2', company: 'Tech Malta', position: 'Software engineer', status:'applied'},
  ]);

    const addJob = (company, position, status) => {
    const newJob = {
      id: Date.now().toString(),
      company,
      position,
      status,
    };
    setJobs([...jobs, newJobs]);
    };

    return (
        <JobsContext.Provider value={{jobs, addJob }}>
            {children}
        </JobsContext.Provider>
    );
}

export function useJobs() {
    return useContext(JobContext);
}