import "next-auth";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
	 */
	export interface Session {
		user: {
			email?: string;
			id?: number;
			image?: string | undefined | null;
			isActive?: boolean;
			name?: string | null;
		};
		accessToken: string;
	}
	export interface User {
		accessToken: string;
		id: number;
		email: string;
		image: string;
	}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	export interface JWT {
		/** OpenID ID Token */
		accessToken: string;
		id: number;
	}
}
