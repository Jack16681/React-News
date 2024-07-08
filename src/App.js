import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  const pgSize = 15;

  // state = {
  //   progress:0
  // }

  const [progress, setProgress] = useState(0)
  const [mode,setMode] = useState('light');

  // setProgress = (progress) => {
  //   this.setState({progress:progress})
  // }

  const setDefaultStyles = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#EEEDEB';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  };
  setDefaultStyles();

  useEffect(() => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#EEEDEB'; // Light grey background
      document.body.style.color = 'black'; // Dark text
    } else {
      document.body.style.backgroundColor = '#333'; // Dark grey background
      document.body.style.color = 'white'; // Light text
    }
  }, [mode]);

  const toggler = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }

    return (
      <div>
        <Router>
          <Navbar mode={mode} toggle={toggler}/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}   key="general" pgSize={pgSize} country="in" category="general" mode={mode} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress}   key="sports" pgSize={pgSize} country="in" category="sports" mode={mode} />} />
            <Route exact path="/science" element={<News setProgress={setProgress}   key="science" pgSize={pgSize} country="in" category="science" mode={mode} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" pgSize={pgSize} country="in" category="entertainment" mode={mode} />} />
            <Route exact path="/health" element={<News setProgress={setProgress}   key="health" pgSize={pgSize} country="in" category="health" mode={mode} />} />
            <Route exact path="technology" element={<News setProgress={setProgress}   key="technology" pgSize={pgSize} country="in" category="technology" mode={mode}/>} />
            <Route exact path="business" element={<News setProgress={setProgress}   key="business" pgSize={pgSize} country="in" category="business" mode={mode}  />} />
          </Routes>
        </Router>
      </div>
    )
}


export default App;

