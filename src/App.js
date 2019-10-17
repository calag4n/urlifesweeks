import React, {useState}from 'react'
import './App.css'
import { format, getISOWeek, differenceInCalendarYears } from 'date-fns'




const born = new Date(1985, 6, 29)

const birthYear = differenceInCalendarYears(born, born)
const birthWeek = getISOWeek(born, { weekStartsOn: 1 })
const todayYear = differenceInCalendarYears(new Date(), born)
const todayWeek = getISOWeek(new Date(), { weekStartsOn: 1 })

function App() {

  const [futurYear, setfuturYear] = useState(differenceInCalendarYears(new Date(), born))

const [futurWeek, setfuturWeek] = useState(getISOWeek(new Date(), { weekStartsOn: 1 }))
  console.log()


  const handleChange = event => {
    const date =new Date(event.target.value) 
  
    setfuturYear(differenceInCalendarYears(date, born))
    setfuturWeek(getISOWeek(date , { weekStartsOn: 1 }))
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Naissance : </h2>
        <p>
          <span>{format(born, 'dd/MM/yyyy')}</span> <br />
          Année : <span>{birthYear}</span> . Semaine : <span>{birthWeek}</span>{' '}
        </p>

        <h2>Aujourd'hui : </h2>
        <p>
          Année : <span> {todayYear} </span> . Semaine : <span>{todayWeek}</span>{' '}
        </p>
        <p>
          Le : <input type='date' onChange={e => handleChange(e)}/> Année : <span>{futurYear || ''}</span>.
          Semaine : <span>{futurWeek || ''}</span>{' '}
        </p>
      </header>
    </div>
  )
}

export default App
