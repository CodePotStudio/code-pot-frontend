import { environment } from "config";

export default {
	SIGNUP: "/auth/signup",
	LOGIN: "/auth/login",
	HOME: "/",
	MYPAGE: "/mypage",
	ACTIVATE: "/register/activate",
	GITHUB_LOGIN: `${environment.serverURL}/auth/github`,
	CHALLANGE_DETAIL: (id: number) => `/challanges/${id}`,
};
