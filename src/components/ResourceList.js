import React from 'react';

import useResources from '../utils/useResources';
import UserList from './UserList';
import './ResourceList.css';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <div className='resources'>
        <ul>
          <h2>{resource === 'todos' ? 'Todos' : 'Posts'}</h2>
          {resources.map(record => (
            <li key={record.id}>{record.title}</li>
          ))}
        </ul>
        <UserList />
      </div>
    </div>
  );
};

export default ResourceList;
