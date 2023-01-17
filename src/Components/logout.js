import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

function Logout() {

    const { logout } = useAuth0()

    return (
        <div className="Logout">
            <h1>Logout</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default Logout;