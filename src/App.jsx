import initLocalStorage from "./utils/initLocalStorage"
import IncomeButton from "./components/transactionButton/incomeButton"
function App() {
  initLocalStorage()

  return (
    <IncomeButton/>
  )
}

export default App
