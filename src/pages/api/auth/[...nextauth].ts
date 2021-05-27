import { createUser, getMe } from "libs/data";
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
	pages: {
		signIn: "/auth/login",
	},
	callbacks: {
		async signIn(user, account, profile) {
			if (account.provider === "github") {
				// github에서 email 가져오기
				const emailRes = await fetch("https://api.github.com/user/emails", {
					headers: {
						authorization: `token ${account.accessToken}`,
					},
				});
				const emails = await emailRes.json();
				const primaryEmail = emails.find((e: any) => e.primary).email;
				// user 생성하기
				const result = await createUser(primaryEmail, user.image, account.id);
				// user 객체에 codepot user id 저장하기
				user.accessToken = result.token;
				user.id = result.user.id;
				return true;
			}
			return true;
		},
		async jwt(token, user) {
			// user에 있는 codepot user id 토큰에 저장하기
			if (user) {
				token = { accessToken: user.accessToken, id: user.id };
			}
			return token;
		},
		async session(session, token) {
			const { accessToken, id } = token;
			const { user, profile } = await getMe(accessToken);
			session = {
				accessToken: accessToken,
				user: {
					email: user?.email,
					id: id,
					image: profile?.avatar,
					isActive: user?.isActive,
					name: user?.name,
				},
			};
			return session;
		},
	},
});
