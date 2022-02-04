import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBott] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function calculate(w){
    w.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burn = weight / 10;
    const gramsleft = grams - (burn * time);

    if (gender === "male") {
      var result = gramsleft / (weight * 0.7);
    }
    else {
      var result = gramsleft / (weight * 0.6);
    }

    if (result <= 0){
      const result = 0;
      setResult(result);
    }
    else{
      setResult(result);
    }

  }

  return (
   <>
      <h1>Calculatin alcohol blood level</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input type="number" value={weight}
            onChange={w => setWeight(w.target.value)} />
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" value={bottles}
            onChange={w => setBott(w.target.value)} />
        </div>
        <div>
          <label>Time</label>
          <input type="number" value={time}
            onChange={w => setTime(w.target.value)} />
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={w => setGender(w.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={w => setGender(w.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>

    </> 
  );
}

export default App;
