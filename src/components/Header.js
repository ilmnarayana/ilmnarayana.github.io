import React from 'react'

function Header() {
    let firstName = 'Manikanta'
    let lastName = 'Narayana'

    return (<header className="Header">
        <h3> Hello {`${firstName} ${lastName}`}! </h3>
    </header>)
}

export default Header;