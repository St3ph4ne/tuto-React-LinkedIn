import React from 'react';
//import d'icones
import NavBar from './NavBar';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import InitialData from '../InitialData';


class App extends React.Component{
  render(){
    return (
      <section id="todo">
        <BrowserRouter>
          {/* 'switch'->'Routes' et 'component'->'element' !!! */}
          <Routes>
            <Route path="/add-task" element={<AddTask/>} />
            <Route path="/" element={<ToDoList tasks={InitialData}/>}/>
          </Routes>
          <NavBar />
        </BrowserRouter>

      </section>
    )
  }
}

export default App;