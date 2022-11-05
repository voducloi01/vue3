import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import { CREATE_PRODUCT } from "@/graphql/createProduct";

export const useProduct = defineStore("useProduct", () => {
	const product = {
		id: "",
		name: " ",
		price: 0,
		image: "",
	};

	const { mutate: createProduct } = useMutation(CREATE_PRODUCT, {
		variables: {
			name: product.name,
			price: product.price,
			image: product.image,
		},
	});
	return { product, createProduct };
});
