import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td><td>{value}</td>
    </>
  )
}
 
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h2>no feedback given</h2>
      </>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <tr><StatisticLine text='good' value={good} /></tr>
          <tr><StatisticLine text='neutral' value={neutral} /></tr>
          <tr><StatisticLine text='bad' value={bad} /></tr>
          <tr><StatisticLine text='all' value={good + neutral + bad} /></tr>
          <tr><StatisticLine text='average' value={(good - bad)/(good + bad + neutral)} /></tr>
          <tr><StatisticLine text='positive' value={100*good/(good + bad + neutral) + '%'} /></tr>
        </tbody>
      </table>
    </>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neural' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
   </div>

  )
}

export default App