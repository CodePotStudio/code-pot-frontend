import { ThemeProvider } from "styled-components";
import defaultTheme from "../common/style/themes/default";
import Normalize from "../common/style/Normalize";
import GlobalStyles from "../common/style/GlobalStyle";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";
import client from "apollo/client";
import { Provider } from "next-auth/client";

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider session={pageProps.session}>
			<ApolloProvider client={client}>
				<ThemeProvider theme={defaultTheme}>
					<Normalize />
					<GlobalStyles />
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</Provider>
	);
}
export default App;
