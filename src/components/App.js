import React, { useState } from 'react';

import './App.css';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className='App'>
      <div className='buttons'>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
