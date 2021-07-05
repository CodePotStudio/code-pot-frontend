import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		for (let err of graphQLErrors) {
			if (err.extensions!.code) {
				console.log(
					`[GraphQL error]: Message: ${err.message}, Location: ${
						err.locations
					}, Path: ${err.path} Code: ${err.extensions!.code}`
				);
			}
		}
	}
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default errorLink;
