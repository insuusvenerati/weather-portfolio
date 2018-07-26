import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Menu } from 'semantic-ui-react';

const NavBar = () => (
        <div className="ui container">
        <Menu pointing secondary inverted size='large' >
            <Container>
            <Menu.Item
                as={NavLink}
                exact
                to='/'
                name='home'
            />
            <Menu.Item
                as={NavLink}
                to='/projects'
                name='projects'
            />
            <Menu.Item
                as={NavLink}
                to='/about'
                name='about'
            />
            <Menu.Item
                as={NavLink}
                to='/contact'
                name='contact'
            />
            </Container>
      </Menu>
    </div>
);
 
export default NavBar;