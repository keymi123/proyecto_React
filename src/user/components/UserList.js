import React from 'react';

import './UserList.css';

import UserItem from './UserItem';



const UsersList =(props,a,b)=> {
    if(props.items.length ===0){
       
        return(
            <div className="center">
            <h2>nos se encontro usuario</h2>
            </div>
        
        );
       

       

    }else{
        return(
            <ul className="users-list">
              {props.items.map(user => {
                  return(
                      <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}




                      />
                  );
              })}
            </ul>

        )
    }
}

export default UsersList;