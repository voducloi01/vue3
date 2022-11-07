import { defineStore } from "pinia";
import { ref } from "vue";
import { ALL_USER } from "@/graphql/allUsers";
import { useQuery, useResult } from "@vue/apollo-composable";
import { notify } from "@kyvg/vue3-notification";
import { router } from "../main";

export const useLogin = defineStore("useLogin", () => {
	const users = ref({
		name: "",
		username: "",
		password: "",
	});
	const { result, loading, error, fetchMore } = useQuery(ALL_USER);
	const data = useResult(result, null, (data) => data.getAllUsers);
	const login = (userLogin) => {
		const index = data.value.findIndex(
			(e) => e.username === userLogin.username
		);
		if (data.value[index]?.password === userLogin.password) {
			notify({
				title: "THÔNG BÁO!",
				text: "ĐĂNG NHẬP THÀNH CÔNG !",
				type: "success",
			});
			router.push({ path: "/", replace: true });
		} else {
			notify({
				title: "THÔNG BÁO",
				text: "ĐĂNG NHẬP THẤT BẠI!",
				type: "error",
			});
		}
		fetchMore({
			variables: {
				offset: data.value.length,
			},
		});
	};
	return { users, result, loading, error, login };
});
