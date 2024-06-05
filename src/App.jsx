import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import Button from "./components/button/Button";



const App = () => {
//	const state = useState(0);
//	const number = state[0];
//	const setNumber =state[1];

	const [number, setNumber] = useState(0);
	

	return <>
	<GlobalStyles></GlobalStyles>
	<Button>ClickMe</Button>
	<h1>{number}</h1>
	<Button action={()=>addNumber(number, setNumber)}>+1</Button>
	<Button action={()=>substractNumber(number, setNumber)}>-1</Button>
	
	
	</> 
	
};
const addNumber=(number, setNumber)=>{
	setNumber(number+1);
}
const substractNumber=(number, setNumber)=>{
	setNumber(number-1);
}
export default App;
