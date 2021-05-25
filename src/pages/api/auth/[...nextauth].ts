import { createUser } from "libs/data";
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
	secret: process.env.JWT_SECRET,
	session: {
		jwt: true,
	},
	jwt: {
		secret: process.env.JWT_SECRET,
	},
	callbacks: {
		// TODO: 왔던 곳으로 되돌아가도록 셋팅하기
		async redirect(url, baseUrl) {
			return "/";
		},
		async signIn(user, account, profile) {
			if (account.provider === "github") {
				// github에서 email 가져오기
				const emailRes = await fetch("https://api.github.com/user/emails", {
					headers: {
						Authorization: `token ${account.accessToken}`,
					},
				});
				const emails = await emailRes.json();
				const primaryEmail = emails.find((e: any) => e.primary).email;
				user.email = primaryEmail;
				// user 생성하기
				const createdUser = await createUser(
					primaryEmail,
					user.image,
					account.id
				);
				// user 객체에 codepot user id 저장하기
				user.accessToken = createdUser.data.createUser.token;
				user.id = createdUser.data.createUser.id;
				return true;
			}
			return true;
		},
		async jwt(token, user) {
			// user에 있는 codepot user id 토큰에 저장하기
			if (user) {
				token = { ...user };
			}
			return token;
		},
		async session(session, token) {
			const { accessToken, ...restInfo } = token;
			session = {
				accessToken,
				user: { ...restInfo },
			};
			return session;
		},
	},
});
