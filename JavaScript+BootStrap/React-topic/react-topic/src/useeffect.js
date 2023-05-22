import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Effect() {
  const [data, setObjectData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onClickHandler = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setObjectData(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={onClickHandler}>Load Data</button>
      {isLoaded ? (
        <div>
          {data.length > 0 ? (
            <div>
              {data.map(item => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No data found.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}