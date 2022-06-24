import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    // users 데이터 -> state로 관리

    const [loading, setLoading] = useState(false);
    // 로딩 중인지 아닌지 체크

    const [error, setError] = useState(null);
    // 에러 발생 여부 체크

    useEffect(() => {
        console.log("come in useEffect")
        const fetchUsers = async () => {
            try {
                console.log("try request")
                // 요청 시작 할 때 error 와 users 를 초기화
                setError(null);
                setUsers(null);
                setLoading(true);
                // 아직 요청 보내기 전(시작) => loading : true 

                const response = await axios.get(
                    // GET 으로는 안된다. 이거 때메 30분 삽질
                    // get 으로 해야함
                    'https://jsonplaceholder.typicode.com/users'
                );
                // 요청 보내놨고, 제대로 왔으면 response 에 있겠지  => await 다 될 때까지 기다려
                // get 으로 보냄

                setUsers(response.data); 
                // 데이터는 response.data 안에 들어있지 
                // 그거를 user state 에다가 넣어놔
                // 그럼 결론적으로 통신이 잘 되서 데이터 잘 받아왔으면 user 에 들어가있겠지

            } catch (e) {
                console.log(e)
                setError(e);
                // 에러 발생 했으면 바로 캐치해서 state 값 설정
            }
            // try, catch 끝나고나서
            
            setLoading(false);
            // 다 받아왔으니까 loading : false
        };

        // 1. useEffect 뒤에 인자가 없으니까 바로 실행
        // 2. fetchUsers 바로 실행
        // 3. fetchUsers 안으로 바로 들어가 => get 보내겠지

    fetchUsers();

    }, []);
    // 아무것도 안넣어줬어 => 처음 웹 렌더링 될 때 바로 실행


    // useEffect 실행하고 나서 바로 밑에 문장들 순서대로 수행

    if (loading) 
        return <div>로딩중..</div>;
        // loading state 보고 True 면 => 통신하는 도중

    if (error) 
        return <div>에러가 발생했습니다</div>;
        // error state 보고 True 면 => 통신하는 과정에서 에러
    if (!users) 
        return null;
        // 데이터 받아왔는데 만약에 아무것도 없으면 => 받아오긴 했는데 아무것도 없다는 소리 

    return (
        <React.Fragment>
            {/* <> </> 으로 대체가능 */}

            <h1>Axios Example</h1>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default Users;