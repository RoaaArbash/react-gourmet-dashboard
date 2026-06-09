import React from 'react';

function Todo(props) {
  return (
    <li>
      <strong>{props.title}</strong> — 
      {/* صندوق كتابة عادي بدون أي تنسيق */}
      <input type="text" placeholder="just right here..." /> 
      <small>({props.createdAt})</small>
    </li>
  );
}

export default Todo;