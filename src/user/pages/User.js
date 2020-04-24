import React from 'react';
import UsersList from '../components/UserList';



const Users =() => {

    const USERS=[{
        id:'u1',
        name:'ithali catalan',
        image:'https://travelandleisure.mx/wp-content/uploads/2019/02/Royal-Caribbean-vacante-Instagram_travel-and-leisuremx.jpg'
        ,places : 1
    },
    {
        id: 'u2',
        name: 'Jose Rojas',
        image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/02/16/8274728646_396567c4f4_o.jpg?itok=CUYUuADt',
        places: 2
    } 
    ];
    return(
        <UsersList items={USERS}/>
        
    );
}

export default Users;