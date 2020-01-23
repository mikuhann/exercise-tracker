import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/Exercise/CreateExercise';
import EditExercise from './components/Exercise/EditExercise';
import ExercisesList from './components/Exercise/ExercisesList';

import { routing } from './constants/routing';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Route exact path={ routing.HOME } component={ ExercisesList } />
        <Route exact path={ routing.CREATE_EXERCISE } component={ CreateExercise } />
        <Route exact path={ routing.CREATE_USER } component={ CreateUser } />
        <Route exact path={ routing.EDIT_EXERCISE } component={ EditExercise } />
      </div>
    </Router>
  );
}

export default App;
