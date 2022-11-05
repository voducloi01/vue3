import gql from "graphql-tag";
export const ALL_USER = gql`
	query {
		getAllUsers {
			id
			name
			username
			password
		}
	}
`;
