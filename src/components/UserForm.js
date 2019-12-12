import React, {useContext, useState} from "react";
import { Form, } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const UserForm = () => {
	const user = useContext(UserContext);
	const [firstName, setFirstName] = useState(user.firstName);
	const [username, setUsername] = useState(user.username);
	const [lastName, setLastName] = useState(user.lastName);
	const [email, setEmail] = useState(user.email);
	
  const handleChange = (e, { name, value }) => {
		switch(name) {
			case "username": {
				setUsername(value);
				break;
			}
			case "firstName": {
				setFirstName(value);
				break;
			}
			case "lastName": {
				setLastName(value);
				break;
			}
			case "email": {
				setEmail(value);
				break;
			}
			default :{

			}
		}
	}
	
  const handleSubmit = (e) => {
		e.preventDefault();
		const u = {firstName, lastName, username, email};
		user.updateUser(u);
  }

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Input
				label="New Username"
				type="text"
				name="username"
				value={username}
				onChange={handleChange}
			/>
			<Form.Input
				label="First Name"
				type="text"
				name="firstName"
				value={firstName}
				onChange={handleChange}
			/>
			<Form.Input
				label="Last Name"
				type="text"
				name="lastName"
				value={lastName}
				onChange={handleChange}
			/>
			<Form.Input
				label="Email"
				type="text"
				name="email"
				value={email}
				onChange={handleChange}
			/>
			<Form.Button color="green">Save</Form.Button>
		</Form>
	)
}


export default UserForm;