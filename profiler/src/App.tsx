import { useState } from 'react'

import './App.css'

import Input from './components/Input/Input'

const initialState = Array.from(Array(10000).keys()).map(() => '');

function App() {
  const [values, setValues] = useState(initialState);

  return (
    <div className='App'>
      <header className='App-header'>
        {values.map((value, index) => (
          <Input
            key={index}
            value={value}
            onChange={(e) => {
              setValues((prevValues) => [
                ...prevValues.slice(0, index),
                e.target.value,
                ...prevValues.slice(index + 1)
              ]);
            }}
          />
        ))}
      </header>
    </div>
  )
}

export default App

// 2 - onChange для каждого сделаем одну и ту же
// index прокидываем
// и добавляем юзКолбэк чтобы функция не пересоздавалась каждый раз

// import { useState, useCallback } from 'react'

// import './App.css'

// import Input from './components/Input/Input'

// const initialState = Array.from(Array(10000).keys()).map(() => '');

// function App() {
//   const [values, setValues] = useState(initialState);

//   const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target);

//     const index = Number(e.target.dataset.index);

//     setValues((prevValues) => [
//       ...prevValues.slice(0, index),
//       e.target.value,
//       ...prevValues.slice(index + 1)
//     ]);
//   }, [setValues]);


//   return (
//     <div className='App'>
//       <header className='App-header'>
//         {values.map((value, index) => (
//           <Input
//             key={index}
//             value={value}
//             onChange={onChange}
//             index={index}
//           />
//         ))}
//       </header>
//     </div>
//   )
// }

// export default App
