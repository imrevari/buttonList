import {useState} from 'react';
import logo from './logo.svg';
import Button from '@mui/material/Button';

import {MyApp} from './MyApp'

import './App.css';

import { MenuBar } from './components/menuBar/MenuBar';

function App() {

  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <div className="App-header">
      <MenuBar buttons={[
        {
          variant: 'outlined',
          title: 'Edit',
          onClick: () => setIsEditMode(prevState => !prevState)
        }
      ]}
       justifyContent={'right'}
       />

      <MyApp isEditMode={isEditMode}/>
    </div>
  );
}

export default App;
