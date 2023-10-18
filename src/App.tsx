import { CurrencyCalculatorWCounter } from './components/CurrencyCalculatorWCounter/CurrencyCalculatorWCounter'
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'
import { useState } from 'react'

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [userNickname, setUsetNickname] = useState('')

  const content = isLogedIn ? (
    <CurrencyCalculatorWCounter
      setUsetNickname={setUsetNickname}
      setIsLogedIn={setIsLogedIn}
    />
  ) : (
    <LoginForm setUsetNickname={setUsetNickname} setIsLogedIn={setIsLogedIn} />
  )

  return (
    <div className="App">
      <Header userNickname={userNickname} />
      {content}
      {/* <button onClick={() => setIsLogedIn(!isLogedIn)}>test</button> */}
    </div>
  )
}

export default App
