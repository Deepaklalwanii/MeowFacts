import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
    const [catFact, setCatFact] = useState('');  
    
    const fetchCatFact = () =>{
        axios.get('https://catfact.ninja/fact').then(response => {
            setCatFact(response.data.fact);
        });
    }

    useEffect(() => {
        fetchCatFact()
    }, []);

    return(
<div className="App">
    <p id='dataContainer'>{catFact}</p>
    <button className='btn' onClick={fetchCatFact}>Generate Cat Fact</button>
</div>

    );
}

 
export default App;