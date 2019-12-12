import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Menu, MenuItem } from 'semantic-ui-react';
import { UserContext } from '../providers/UserProvider';

const Navbar = () => {
	const {username} = useContext(UserContext);
	return(
		<Menu>
			<MenuItem>
				<Link to='/'>Home</Link>
			</MenuItem>
			<MenuItem>
				<Link to='/about'>About</Link>
			</MenuItem>
			<MenuItem>
				<Link to='/User/Profile'>{username}</Link>
			</MenuItem>
		</Menu>
	)
}

export default Navbar;