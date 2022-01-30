
import Form from './Form';
import Banner from './Banner'
import logo from '../assets/images.jpeg'

function App() {
    
    return(
    <div>
      <Banner>
				<img src={logo} alt='Prime Number' className='lmj-logo' />
				<h1 className='lmj-title'>This program checks if a number is prime </h1>
			</Banner>
    <Form />

    </div>
    )
}

export default App

