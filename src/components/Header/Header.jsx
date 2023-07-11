import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to='/'>Logo</Link>
            <nav>
              //TODO barras navegación
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <div>
              // TODO numero persistente de Items en el carrito
              0
            </div>
        </header>
    );
}

export default Header;
