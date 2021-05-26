import NextAuth from "next-auth";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
	 */
	interface Session {
		user: {
			name: string;
			email: string;
			id: number;
			image: string;
			isActive: boolean;
		};
		accessToken: string;
	}
	interface User {
		accessToken: string;
		id: number;
		name: string;
		email: string;
		id: string;
		image: string;
		isActive: boolean;
	}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		accessToken: string;
		name: string;
		email: string;
		id: number;
		image: string;
		isActive: boolean;
	}
}
