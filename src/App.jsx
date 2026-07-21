import StudentReadinessChart from './components/StudentReadinessChart'
import TrainingProgressOverview from './components/TrainingProgressOverview'
import './App.css'

function App() {
  return (
    <div className="dashboard-row">
      <TrainingProgressOverview />
      <StudentReadinessChart />
    </div>
  )
}

export default App