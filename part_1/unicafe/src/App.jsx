import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {

  const totalAmount = good + neutral + bad
  const averageAmount = ((good * 1) + (bad * -1)) / totalAmount
  const positiveAmount = (good / totalAmount) * 100

  if (totalAmount > 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />

            <StatisticLine text="All" value={totalAmount} />
            <StatisticLine text="Average" value={averageAmount} />
            <StatisticLine text="Positive" value={positiveAmount + " %"} />
          </tbody>
        </table>
      </div>
    )
  }
  else return (<div><p>No feedback given</p></div>)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = () => {
    setGood(good + 1)
  }

  const addToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addToBad = () => {
    setBad(bad + 1)
  }

  const totalAmount = good + neutral + bad

  const averageAmount = ((good * 1) + (bad * -1)) / totalAmount

  const positiveAmount = (good / totalAmount) * 100

  return (
    <div>
      <Header text="Give feedback" />
      <Button onClick={addToGood} text="Good" />
      <Button onClick={addToNeutral} text="Neutral" />
      <Button onClick={addToBad} text="Bad" />

      <Header text="Statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App