import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#d3d3d3',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      <h1 style={{ textAlign: 'center' }}>TODO</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
