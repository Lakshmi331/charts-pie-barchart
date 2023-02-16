import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {vaccinationCoverageDetails} = props

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-by-coverage-heading">Vaccination Coverage</h1>

      <BarChart
        width={900}
        height={400}
        data={vaccinationCoverageDetails}
        margin={{top: 5}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose1" name="Dose 1" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
