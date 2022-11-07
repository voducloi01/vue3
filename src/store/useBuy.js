import { defineStore } from "pinia";
import { ref } from "vue";
import { CREATE_CART } from "@/graphql/createCart";
import { useMutation } from "@vue/apollo-composable";
import { ALL_CART } from "@/graphql/allCart";
import { deleteCart } from "@/graphql/deleteCart";
import { notify } from "@kyvg/vue3-notification";

export const useBuy = defineStore("useBuy", () => {
	const product = ref({
		id: "",
		name: "",
		price: 0,
		image: "",
		soluong: 0,
		total: 0,
	});

	const handleBuy = (products) => {
		product.value = { ...products, soluong: 1, total: 0 };
		createCart(product.value);
		notify({
			title: "THÔNG BÁO!",
			text: "Thêm vào giỏ hàng thành công !",
			type: "success",
		});
	};
	const { mutate: createCart } = useMutation(CREATE_CART, {
		variables: {
			id: product.value.id,
			name: product.value.name,
			price: product.value.price,
			image: product.value.image,
			soluong: product.value.soluong,
			total: product.value.total,
		},
		refetchQueries: [
			{
				query: ALL_CART,
			},
		],
	});

	return {
		product,
		handleBuy,
		createCart,
		// deleteId,
	};
});
