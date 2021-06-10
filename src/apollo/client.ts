import { ApolloClient, createHttpLink, from } from "@apollo/client";
import cache from "./cache";
import { environment } from "config";
import authLink from "./authLink";
import errorLink from "./errorLink";

const httpLink = createHttpLink({
	uri: environment.grapqlServerURL,
	credentials: "include",
});

const client = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache,
});

export default client;
