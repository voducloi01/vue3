import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Product from "@/components/Product.vue";
import Resgister from "@/components/Resgister.vue";
import Notifications from "@kyvg/vue3-notification";
import BuyProduct from "@/components/BuyProduct";
import Cart from "@/components/Cart.vue";
export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "product",
			component: Product,
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/resgister",
			name: "resgister",
			component: Resgister,
		},
		{
			path: "/buy",
			name: "buy",
			component: BuyProduct,
		},
		{
			path: "/cart",
			name: "cart",
			component: Cart,
		},
	],
});

const pinia = createPinia();
const app = createApp(App);
app.use(Notifications);
app.use(pinia);
app.use(router);
app.mount("#app");
