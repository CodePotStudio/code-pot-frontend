import { ApolloClient, from, createHttpLink } from "@apollo/client";
import cache from "./cache";
import { environment } from "config";
import authLink from "./authLink";

const httpLink = createHttpLink({
	uri: environment.grapqlServerURL,
	credentials: "include",
});

const client = new ApolloClient({
	link: from([authLink, httpLink]),
	cache,
});

export default client;
