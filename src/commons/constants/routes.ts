import { environment } from "config";

export default {
	SIGNUP: "/signup",
	LOGIN: "/login",
	HOME: "/",
	MYPAGE: "/mypage",
	ACTIVATE: "/register/activate",
	GITHUB_LOGIN: `${environment.serverURL}/auth/github`,
};
