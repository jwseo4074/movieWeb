import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersUsingBtn() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );

            setUsers(response.data); 

        } catch (e) {
            console.log(e)
            setError(e);
        }        
        setLoading(false);
    };

    if (loading) 
        return <div>로딩중..</div>;

    if (error) 
        return <div>에러가 발생했습니다</div>;

    return (
        <>
            {users ?
                <> 
                    <h1>받아온 데이터</h1>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.name})
                            </li>
                        ))}
                    </ul>
                </>
                :
                <>
                    <h1>Axios Example using Btn</h1>
                    <button onClick={fetchUsers}> 데이터 불러오기</button>
                </>
            }          
        </>
    );
}

export default UsersUsingBtn;