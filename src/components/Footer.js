import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
    const todosCount = useSelector((state) => state.todos.items.length);

    return(
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Всього: {todosCount}</p>
    </div>
    );
};

export default Footer;