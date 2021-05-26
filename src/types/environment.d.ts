namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		GITHUB_ID: string;
		GITHUB_SECRET: string;
		NEXTAUTH_URL: string;
		JWT_SECRET: string;
		NEXT_PUBLIC_GRAPHQL_SERVER_URL: string;
		NEXT_PUBLIC_SERVER_URL: string;
	}
}
