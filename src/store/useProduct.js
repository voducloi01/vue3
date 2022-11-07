import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import { CREATE_PRODUCT } from "@/graphql/createProduct";
import { ref } from "vue";
import { update_product } from "@/graphql/updateProduct";
import { ALL_PRODUCT_QUERY } from "@/graphql/allProducts";
import { deleteProduct } from "@/graphql/deleteProduct";

export const useProduct = defineStore("useProduct", () => {
	const product = ref({
		id: "",
		name: "",
		price: 0,
		image: "",
	});

	const { mutate: createProduct } = useMutation(CREATE_PRODUCT, {
		variables: {
			name: product.value.name,
			price: product.value.price,
			image: product.value.image,
		},
		refetchQueries: [
			{
				query: ALL_PRODUCT_QUERY,
			},
		],
	});

	const handleId = (products) => {
		product.value.id = products.id;
		product.value.name = products.name;
		product.value.price = products.price;
		product.value.image = products.image;
	};

	const { mutate: updateProduct } = useMutation(update_product, () => ({
		variables: {
			id: product.value.id,
			name: product.value.name,
			price: Number(product.value.price),
			image: product.value.image,
		},
		refetchQueries: [
			{
				query: ALL_PRODUCT_QUERY,
			},
		],
	}));

	const idProduct = ref();
	const DeleteId = (id) => {
		idProduct.value = id;
		Delete();
	};

	const { mutate: Delete } = useMutation(deleteProduct, () => ({
		variables: {
			id: idProduct.value,
		},
		refetchQueries: [
			{
				query: ALL_PRODUCT_QUERY,
			},
		],
	}));

	return {
		product,
		createProduct,
		handleId,
		updateProduct,
		DeleteId,
		Delete,
	};
});
