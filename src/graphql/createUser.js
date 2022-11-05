import gql from "graphql-tag";

export const createUser = gql`
	mutation ($name: String, $username: String!, $password: String!) {
		createUser(name: $name, username: $username, password: $password) {
			name
			username
			password
		}
	}
`;
