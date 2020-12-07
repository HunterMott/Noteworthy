import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Notes from './components/Notes'
import Todo from './components/Todo'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {baseURL, config} from './services'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/notes'>
        <Notes />
      </Route>
      <Route exact path='/todo'>
        <Todo />
      </Route>
    </div>
  );
}

export default App;
