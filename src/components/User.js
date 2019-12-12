import React, { useContext } from "react";
import { Card, } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const User = () => {

	const {username, dateJoined, firstName, lastName, email} = useContext(UserContext);
	const fullName = `${firstName} ${lastName}`
	return(
		<Card>
			<Card.Content>
				<Card.Header>{username}</Card.Header>
				<Card.Meta>
					Date Joined: {dateJoined}
				</Card.Meta>
			</Card.Content>
			<Card.Content>
				<p>Name: {fullName}</p>
				<p>Email: {email}</p>
			</Card.Content>
		</Card>
	)
}

export default User;
