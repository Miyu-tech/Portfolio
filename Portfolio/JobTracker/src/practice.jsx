// Counter

import react, { useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count +1 )}>Count: {count}</button>
};

function Message () {
    const [text, setText] = useState('Hello');
    return <div onClick={() => setText('Hi')}>{text}
    </div>
}

import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    useEffect(() => {
    fetch('/api/data')
    .then(res => res.json());
    .then(json => setData(json));
    }, []);
    return <div> {data ? JSON.stringify(data) :
    'Loading...'} </div>;
}

import React, {useState, useEffect} from 'react';

function DataFetch () {
    const [data, setData] = useState(null);
    useEffect (() => {
        fetch('/api/data')
        .then(res => res.json())
        .then(json => setData(json));
    }, []);
    return <div>{data ? JSON.stringify(data) : 'Loading'}</div>
}

import React { createContext, useContext } from 'react';
const UserContext = createContext({ name: 'Alex'})

function UserName () {
    const user = useContext(UserContext);
    return <h2>{user.name}</h2>
}

function App () {
    retrun (
        <UserContext.Provider value={{ name: 'Bob'}}>
            {UserName /}
        </UserContext.Provider>
    );
}

const UserContext = creatContext({ name: 'Alice'});

function UserName () {
    const user = useContect(UserContext);
    return <h2>{user,name}</h2>;
}

function App () {
    return (
        <UserContext.Provider value={{name: 'Bob'}}>
            {UserName /}
        </UserContext.Provider>
    );
}