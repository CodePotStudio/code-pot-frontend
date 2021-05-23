type Environment = {
	serverURL: string;
	grapqlServerURL: string;
};

const environment: Environment = {
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL as string,
	grapqlServerURL: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL as string,
};

export default environment;
