import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue((prevValue) => prevValue + e.currentTarget.value);
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue('Error');
    }
  };

  const clear = () => {
    setValue('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col bg-black text-white w-80 rounded-lg shadow-2xl">
        <div className="p-5 text-right text-4xl overflow-auto h-20">{value}</div>
        <div className="grid grid-cols-4 gap-0.5 p-5">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((item, index) => (
            <button
              key={index}
              value={item}
              onClick={item === '=' ? calculate : handleClick}
              className={`calculator-key ${item === '=' ? 'col-span-2 bg-orange-500' : 'bg-gray-500'} text-2xl p-3 m-0.5 rounded-lg focus:outline-none`}
            >
              {item}
            </button>
          ))}
          <button onClick={clear} className="col-span-2 bg-red-500 text-2xl p-3 m-0.5 rounded-lg focus:outline-none">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;