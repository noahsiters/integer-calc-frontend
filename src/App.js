import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const [calc, setDisplay] = useState("");

	const ops = ['+','-','*'];

	const updateDisplay = value => {
		// makes it so you can only input an operator after inputting a number, and only once between numbers
		if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
			return;
		}

		// only allows you to enter a 0 after entering another number
		if (calc === '' && value === '0'){
			return;
		}
		setDisplay(calc + value);
	}

	const calculate = () => {
		//CALL BACKEND API
		//updateDisplay("TEST");

		console.log(calc);

		// sends the equation as a string to the API
		sendHTTP(`http://localhost:8080/calc/${calc}`);
		//sendHTTP(`http://noahsiters-calc-api.herokuapp.com/${calc}`);
	}

	const clearCalc = () => {
		if (calc == ''){
			return;
		}
		else{
			setDisplay('');
		}
	}

	function sendHTTP(url){
		const http = new XMLHttpRequest();
		http.open("GET", url);
		http.send();

		http.onreadystatechange=(e)=>{
			//console.log(http.responseText);

			// sets display to the API response
			setDisplay(http.responseText);
		}
	}

  return (
	<div className="App">
		<div className='calculator'>
			<div className='display'>
				{ calc || "0" }
			</div>

			<div className='digits'>
				<table className='digits'>
					<tr>
						<td><button onClick={() =>  updateDisplay('7')}>7</button></td>
						<td><button onClick={() =>  updateDisplay('8')}>8</button></td>
						<td><button onClick={() =>  updateDisplay('9')}>9</button></td>
					</tr>
					<tr>
						<td><button onClick={() =>  updateDisplay('4')}>4</button></td>
						<td><button onClick={() =>  updateDisplay('5')}>5</button></td>
						<td><button onClick={() =>  updateDisplay('6')}>6</button></td>
					</tr>
					<tr>
						<td><button onClick={() =>  updateDisplay('1')}>1</button></td>
						<td><button onClick={() =>  updateDisplay('2')}>2</button></td>
						<td><button onClick={() =>  updateDisplay('3')}>3</button></td>
					</tr>
					<tr>
						<td><button onClick={() =>  updateDisplay('0')}>0</button></td>
					</tr>
				</table>
			</div>
			
			<div className='operators'>
				<table className='operators'>
					<tr>
						<td><button onClick={() =>  updateDisplay('+')}>+</button></td>
					</tr>
					<tr>
						<td><button onClick={() =>  updateDisplay('-')}>-</button></td>
					</tr>
					<tr>
						<td><button onClick={() =>  updateDisplay('*')}>*</button></td>
					</tr>
					<tr>
						<td><button onClick={calculate}>=</button></td>
					</tr>
				</table>
			</div>

			<div className='clear'>
				<table className='clear'>
					<tr>
						<td><button onClick={clearCalc}>AC</button></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
  );
}

export default App;
