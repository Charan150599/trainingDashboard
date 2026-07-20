import React from 'react'
import './TrainingProgressOverview.css'
import fullstackicon from '../assets/Fullstack.png'
import pythonicon from '../assets/Python.png'
import dataanalyticsicon from '../assets/DataAnalytics.png'
import uiuxicon from '../assets/UIUX.png'
import javaicon from '../assets/Java.png'

const trainingData = [
  {
    id: 1,
    title: 'Full Stack',
    code: 'FS-DP-07',
    percent: 90,
    completed: 320,
    total: 356,
    image: fullstackicon,
  },
  {
    id: 2,
    title: 'Python',
    code: 'PY-08',
    percent: 81,
    completed: 286,
    total: 300,
    image: pythonicon,
  },
  {
    id: 3,
    title: 'Data Analytics',
    code: 'DA-05',
    percent: 58,
    completed: 145,
    total: 248,
    image: dataanalyticsicon,
  },
  {
    id: 4,
    title: 'UI/UX',
    code: 'UI-09',
    percent: 94,
    completed: 210,
    total: 223,
    image: uiuxicon,
  },
  {
    id: 5,
    title: 'Java',
    code: 'JD-04',
    percent: 72,
    completed: 321,
    total: 445,
    image: javaicon,
  },
]

const TrainingProgressOverview = () => {
  return (
    <div className="training-card">
      <div className="training-header">
        <h2>Training Progress Overview</h2>
        <span className="training-view-all">View All</span>
      </div>

      <div className="training-list">
        {trainingData.map((item) => (
          <div className="training-row" key={item.id}>
            <div className="training-icon-box">
             <img
                src={item.image}  alt={item.title} className="training-icon"/>
           </div>

            <div className="training-title-block">
              <h4>{item.title}</h4>
              <span>{item.code}</span>
            </div>

            <div className="training-progress-bar" aria-hidden="true">
              {Array.from({ length: 17 }).map((_, i) => {
                const filled = i < Math.round((item.percent / 100) * 17)
                return (
                  <span
                    key={i}
                    className={filled ? 'bar-segment filled' : 'bar-segment'}
                  />
                )
              })}
            </div>

            <div className="training-percent">{item.percent}%</div>

            <div className="training-students">
              {item.completed}/{item.total}
              <br />
              Students
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrainingProgressOverview
