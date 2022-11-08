import gql from "graphql-tag";

export const deleteCart = gql`
	mutation deleteCart($id: ID!) {
		deleteCart(id: $id) {
			message
		}
	}
`;
