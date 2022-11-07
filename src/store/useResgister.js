import { defineStore } from "pinia";
import { ref } from "vue";
import { createUser } from "@/graphql/createUser";
import { useMutation } from "@vue/apollo-composable";
import { ALL_USER } from "@/graphql/allUsers";
import { useQuery, useResult } from "@vue/apollo-composable";
import { notify } from "@kyvg/vue3-notification";

export const useRegister = defineStore("useRegister", () => {
	const users = ref({
		name: "",
		username: "",
		password: "",
	});

	const { result, fetchMore } = useQuery(ALL_USER);
	const data = useResult(result, null, (data) => data.getAllUsers);
	const dangKy = (userDangKy) => {
		const user = data.value.map((e) => e.username);
		const check = user.includes(userDangKy.username);
		if (!check) {
			register(users.value);
			notify({
				title: "THÔNG BÁO!",
				text: "ĐĂNG KÝ THÀNH CÔNG !",
				type: "success",
			});
			users.value.password = "";
			users.value.username = "";
		} else {
			notify({
				title: "THÔNG BÁO",
				text: "ĐĂNG KÝ THẤT BẠI!",
				type: "error",
			});
		}
		fetchMore({
			variables: {
				offset: data.value.length,
			},
		});
	};

	const { mutate: register } = useMutation(createUser, {
		variables: {
			name: users.value.name,
			username: users.value.username,
			password: users.value.password,
		},
		refetchQueries: [
			{
				query: ALL_USER,
			},
		],
	});

	// const dangKy = () => {
	// 	register(users.value);
	// };

	return { users, register, dangKy };
});
