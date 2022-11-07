import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import { CREATE_PRODUCT } from "@/graphql/createProduct";
import { ref } from "vue";
import { update_product } from "@/graphql/updateProduct";
import { ALL_PRODUCT_QUERY } from "@/graphql/allProducts";
import { deleteProduct } from "@/graphql/deleteProduct";
import { notify } from "@kyvg/vue3-notification";

export const useProduct = defineStore("useProduct", () => {
	const product = ref({
		id: "",
		name: "",
		price: 0,
		image: "",
	});

	const AddProduct = () => {
		if (product.value.name !== "" && product.value.image !== "") {
			createProduct(product.value);
			notify({
				title: "THÔNG BÁO!",
				text: "Thêm thành công !",
				type: "success",
			});
		} else {
			notify({
				title: "THÔNG BÁO!",
				text: "Vui lòng nhập đầy đủ",
				type: "error",
			});
		}
	};
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

	const CapNhap = () => {
		if (product.value.name !== "" && product.value.image !== "") {
			updateProduct(product.value);
			notify({
				title: "THÔNG BÁO!",
				text: "Update thành công !",
				type: "success",
			});
		} else {
			notify({
				title: "THÔNG BÁO!",
				text: "Vui lòng nhập đầy đủ",
				type: "error",
			});
		}
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
		notify({
			title: "THÔNG BÁO!",
			text: "Xóa thành công !",
			type: "success",
		});
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
		AddProduct,
		CapNhap,
	};
});
