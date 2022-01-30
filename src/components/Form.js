import '../styles/Form.css'
import { useState } from 'react'

function Form() {
    const [inputValue, setInputValue] = useState('Type a number')
    return<div className="search-box">
    
       <input type="number" name="" class="search-txt" 
       placeholder= {inputValue} 
       onChange={(e) => setInputValue(e.target.value)}/>
    <button onClick={() => alert(prime(inputValue))}>
      <a class="search-btn" href="#"> Check
        <i class="fa fa-search" aria-hidden="true"></i>
      </a>
      </button>
        </div>
}

function prime(value){
  if(value.match(/[a-z]/i))
    return "Only numbers are allowed "
  if(value < 0)
    return "only positive numbers"
  if(value < 2)
    return " is not prime because a prime number has two divisors"
  for(var i = 2; i < value; i++)
  if(value%i === 0) return "is not prime because " + value + " is divisible by "
  + i;
    return "is Prime"
}


export default Form