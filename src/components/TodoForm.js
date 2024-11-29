import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (task.trim()) {
            dispatch(addTodo(task));
            setTask('');
        }
    };

    return (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Додати завдання..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          width: '300px'
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: '10px 20px',
          marginLeft: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Додати
      </button>
    </div>
    );
};

export default TodoForm;