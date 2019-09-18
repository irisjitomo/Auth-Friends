import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState('')
    const [newAge, setNewAge] = useState('');
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        getFriends();
    }, [])

    const handleName = e => {
        setNewFriend(e.target.value)
    }
    const handleAge = e => {
        setNewAge(e.target.value)
    }
    const handleEmail = e => {
        setNewEmail(e.target.value)
    }

    const submit = e => {
        e.preventDefault();
        setNewFriend('')
        setNewAge('')
        setNewEmail('')
        axiosWithAuth().post('/friends', {name: newFriend, age: newAge, email: newEmail})
        .then(res => {
            console.log(res)
            getFriends()
        })
    }

    const getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
            console.log(res.data)})
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h2>Here is your Friends List:</h2>
            <br></br>
            <div>
                {friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <h3>Name: {friend.name}</h3>
                            <h3>Age: {friend.age}</h3>
                            <h3>email: {friend.email}</h3>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={submit}>
                <div>
                    <h4>Add A Friend:</h4>
                    <input name='name' placeholder='add name' value={newFriend} onChange={handleName}/>
                    <input name='age' placeholder='add age' value={newAge} onChange={handleAge}/>
                    <input name='email' placeholder='add email' value={newEmail} onChange={handleEmail}/>
                    <button>Submit</button>
                    </div>
            </form>
        </div>
    )
}

export default Friends;