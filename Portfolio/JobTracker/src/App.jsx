import { JobProvider } from "./context/JobContext";
import JobListPage from "./pages/JobListPage";

function App() {
  return (
    <JobProvider>
      <JobListPage />
    </JobProvider>
  );
}

export default App;
