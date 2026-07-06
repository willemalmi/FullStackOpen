import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Feedback = ({ text, amount }) => <p>{text} {amount}</p>

const Statistics = ({ good, neutral, bad }) => {

  const totalAmount = good + neutral + bad
  const averageAmount = ((good * 1) + (bad * -1)) / totalAmount
  const positiveAmount = (good / totalAmount) * 100

  return (
    <div>
      <Feedback text="Good" amount={good} />
      <Feedback text="Neutral" amount={neutral} />
      <Feedback text="Bad" amount={bad} />

      <Feedback text="All" amount={totalAmount} />
      <Feedback text="Average" amount={averageAmount} />
      <Feedback text="Positive" amount={positiveAmount + " %"} />
    </div>
  )
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