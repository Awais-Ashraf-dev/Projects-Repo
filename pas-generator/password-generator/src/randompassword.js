import React, { useState } from 'react';

export default function Password_ui() {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });
  const [textInput, setTextInput] = useState('');
  const [password, setPassword] = useState('');
  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;
    setCheckboxValues((prevState) => ({ ...prevState, [checkboxName]: isChecked }));
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleButtonClick = () => {
    let newPassword = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let number= '123456789';
    let symbol='!@#$%^&*(){}[]:<>';
  
    let length = parseInt(textInput);
    if (length <8) {
      alert('Please enter a length of 8 or above');
      return;
    }

    if (checkboxValues.checkbox1) {
      newPassword += alpha.toUpperCase();
      
    }
    if (checkboxValues.checkbox2) {
       newPassword += alpha;
    }
    if (checkboxValues.checkbox3) {
      newPassword += number;
    
    }
    if (checkboxValues.checkbox4) {
      newPassword += symbol;
    }
    let generated_password = [];
    for (let i = 0; i < length; i++) {
     generated_password.push(newPassword[Math.floor(Math.random()*newPassword.length)]);
     // setPassword(password_array);
    }
    setPassword(generated_password.join(''));
    }
    const copy_password = () => {
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(password)
            .then(() => {
                alert('Password copied to clipboard');
            })
            .catch((error) => {
                alert('Failed to copy password to clipboard');
                console.error(error);
            });
        } else 
        {
            const textarea = document.createElement('textarea');
            textarea.value = password;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Password copied to clipboard');
        }
  };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4' id='col'>
      <h1>Password Generator</h1>
      <input type="text" value={password} readOnly /> <button id='bottone5' onClick={copy_password}>Copy</button>
      {/* <h1 className='box' id='mybox'>{password}</h1> */}
      <br/>
      <div className='checks'>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxValues.checkbox1}
          onChange={handleCheckboxChange}
        />
        <label>
        UpperCase
        </label>
      <br />
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxValues.checkbox2}
          onChange={handleCheckboxChange}
        />
        <label>
        LowerCase
      </label>
      <br />
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxValues.checkbox3}
          onChange={handleCheckboxChange}
        />
        <label>
        Numbers
      </label>
      <br />
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxValues.checkbox4}
          onChange={handleCheckboxChange}
        />
        <label>
        Symbol
        </label>
        </div>
      <label id='lbl'>
        Input Length:
        </label>
        <input type="number" id="ambiguous_id" value={textInput} onChange={handleTextChange}></input>
      <br/>
      <button id='generate' onClick={handleButtonClick}>Click to generete</button>
    </div>          
    </div>
 </div>
  );
}
