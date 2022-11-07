import gql from "graphql-tag";

export const CREATE_CART = gql`
	mutation (
		$id: String!
		$name: String!
		$price: Int!
		$image: String!
		$soluong: Int!
		$total: Int!
	) {
		createCart(
			id: $id
			name: $name
			price: $price
			image: $image
			soluong: $soluong
			total: $total
		) {
			id
			name
			price
			image
			soluong
			total
		}
	}
`;
