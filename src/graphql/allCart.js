import gql from "graphql-tag";
export const ALL_CART = gql`
	query {
		getAllCart {
			id
			name
			price
			image
			soluong
			total
		}
	}
`;
