import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	callbacks: {
		// TODO: 왔던 곳으로 되돌아가도록 셋팅하기
		async redirect(url, baseUrl) {
			return "/";
		},
	},
});
