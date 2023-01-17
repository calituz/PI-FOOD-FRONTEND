import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {

    const { user, isAuthenticated } = useAuth0()

    return (

        isAuthenticated && (

        <div className="Profile">
          {/*   {JSON.stringify(user)}  */}

            <div>
                <h1>INFO SUPER SECRETA:</h1>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>

        </div>
        )
    );
}

export default Profile;