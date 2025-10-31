import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage';
import Pricing from './components/PricingPage';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Router>
        <Switch>
          <Route path="/pricing" >
            <Pricing />
          </Route>
          <Route path="/" >
            <HomePage />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App
