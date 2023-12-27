function IncomeButton() {
	const addBalance = () => {
		const balanceToAdd = parseInt(window.prompt("Ingrese el monto:"))
		const currentBalance = parseInt(localStorage.getItem("balance"))
		localStorage.setItem("balance", currentBalance + balanceToAdd)
	}

	return (
		<button onClick={addBalance} className="incomeButton">Income</button>
	)
}

export default IncomeButton