import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import './StudentReadinessChart.css'
 
const data = [
  { name: 'Ready', value: 845, color: '#6ECEE9' },
  { name: 'Need Mock Interview', value: 215, color: '#B46BEA' },
  { name: 'Resume Pending', value: 145, color: '#7992E6' },
  { name: 'Other Pending', value: 65, color: '#6409FF' },
]
 
const StudentReadinessChart = () => {
  const total = data.reduce((sum, d) => sum + d.value, 0)
 
  return (
    <div className="readiness-card">
      <h2 className="readiness-title">Student Readiness for Placement</h2>
 
      <div className="readiness-body">
        <div className="readiness-donut">
          <PieChart width={220} height={220}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={82}
              outerRadius={95}
              startAngle={90}
              endAngle={-270}
              paddingAngle={4}
              cornerRadius={10}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="readiness-center">
            <span className="readiness-count">{total.toLocaleString()}</span>
            <span className="readiness-label">Total Students</span>
          </div>
        </div>
 
        <ul className="readiness-legend">
          {data.map((item) => (
            <li key={item.name}>
              <span className="dot" style={{ backgroundColor: item.color }} />
              <div>
                <p className="legend-name">{item.name}</p>
                <p className="legend-value">
                  {item.value.toLocaleString()}{' '}
                  <span className="legend-percent">
                    ({((item.value / total) * 100).toFixed(1)}%)
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
 
export default StudentReadinessChart