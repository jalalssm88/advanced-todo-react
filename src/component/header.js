import React from 'react';

function Header(){
    return(
        <div style={headerStyle}>
            <h1>Tode List</h1>
        </div>
    )
}

const headerStyle = {
    backgroundColor:'gray',
    color: 'white',
    textAlign: 'center',
    height: '45px',
    marginBottom: '3px'

}

export default Header;