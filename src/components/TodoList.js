import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);

    return(
        <div>
      <h2 style={{ textAlign: 'center' }}>TODOs</h2>
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Завдань немає</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                backgroundColor: '#ffe4e1',
                margin: '10px auto', // Вирівнювання по центру
                padding: '10px',
                borderRadius: '5px',
                width: '50%', // Встановлення ширини на 50% від контейнера
                maxWidth: '300px', // Максимальна ширина для обмеження
                textAlign: 'center', // Центрування тексту
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Легка тінь для естетики
              }}
            >
              {todo}
            </li>
          ))}
        </ul>
      )}
    </div>
    );
};

export default TodoList;