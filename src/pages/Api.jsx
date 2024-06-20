import { useState, useEffect } from 'react';

const API_LIST = [
  {
    name: 'Get User Information',
    endpoint: '/users/:userId',
    description: 'Retrieves information for a specific user.',
  },
  {
    name: 'Create a New Post',
    endpoint: '/posts',
    description: 'Creates a new post in the system.',
  },
  {
    name: 'Get User Information',
    endpoint: '/users/:userId',
    description: 'Retrieves information for a specific user.',
  },
  {
    name: 'Create a New Post',
    endpoint: '/posts',
    description: 'Creates a new post in the system.',
  }, {
    name: 'Get User Information',
    endpoint: '/users/:userId',
    description: 'Retrieves information for a specific user.',
  },
  {
    name: 'Create a New Post',
    endpoint: '/posts',
    description: 'Creates a new post in the system.',
  }, {
    name: 'Get User Information',
    endpoint: '/users/:userId',
    description: 'Retrieves information for a specific user.',
  },
  {
    name: 'Create a New Post',
    endpoint: '/posts',
    description: 'Creates a new post in the system.',
  }, {
    name: 'Get User Information',
    endpoint: '/users/:userId',
    description: 'Retrieves information for a specific user.',
  }
];

function ApiList() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    setApis(API_LIST);
  }, []);

  return (
    <div style={{alignItems:'center', justifyContent: 'center', paddingTop: 120,paddingLeft: 120, paddingBottom: 50}}>
      <h2>Our Available APIs</h2>
      <ul>
        {apis.map((api) => (
          <li key={api.name}>
            <h4>{api.name}</h4>
            <p>Endpoint: {api.endpoint}</p>
            <p>{api.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiList;
