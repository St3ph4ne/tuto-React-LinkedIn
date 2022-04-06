import React from 'react';
//import d'icones
import NavBar from './NavBar';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


class App extends React.Component{
  render(){
    return (
      <section id="todo">
        <BrowserRouter>
          {/* 'switch'->'Routes' et 'component'->'element' !!! */}
          <Routes>
            <Route path="/add-task" element={<AddTask/>} />
            <Route path="/" element={<ToDoList/>} />
          </Routes>
          <NavBar />
        </BrowserRouter>

      </section>
    )
  }
}

export default App;