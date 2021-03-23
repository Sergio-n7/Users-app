import React, { useState, useEffect } from 'react';
import Button from './Button.js'

export default function List () {
    const [list, setList] = useState ([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((list) => setList(list));
    }, [url]);
    return (
          <div className= 'list-names'>
            
                {list.map((el) => (
                    <ul>
                        
                    <li key={el.id}>{el.name}</li>
                    <li key={el.id}>{el.username}</li>
                    <li key={el.id}>{el.website}</li>
                    <Button />
                    
                    </ul>
                ))}
            
          </div>
    )
}


