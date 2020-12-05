import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Notes from './components/Notes'
import Todo from './components/Todo'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {baseURL, config} from './services'



function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setData(resp.data.records)

      console.log(resp.data.records)
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
