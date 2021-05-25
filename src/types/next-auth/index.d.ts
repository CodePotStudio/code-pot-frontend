import NextAuth from "next-auth";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
	 */
	interface Session {
		user: {
			name?: string | undefined | null;
			email?: string | undefined | null;
			id?: string | undefined | null;
			image?: string | undefined | null;
		};
		accessToken: string;
	}
	interface User {
		accessToken: string;
		id: string | undefined | null;
	}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		accessToken: string;
		name?: string | undefined | null;
		email?: string | undefined | null;
		id?: string | undefined | null;
		image?: string | undefined | null;
	}
}
