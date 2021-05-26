import { ThemeProvider } from "styled-components";
import defaultTheme from "../common/style/themes/default";
import Normalize from "../common/style/Normalize";
import GlobalStyles from "../common/style/GlobalStyle";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";
import client from "apollo/client";
import { Provider, useSession, signIn } from "next-auth/client";
import { useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";
import { LoadingTemplate } from "components";
interface Props {
	children: React.ReactNode;
}

/**
 * Authentication configuration
 */
export interface AuthEnabledComponentConfig {
	auth: boolean;
}

// TODO: 글로벌 Type으로 만들기
/**
 * A component with authentication configuration
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentWithAuth<PropsType = any> = React.FC<PropsType> &
	AuthEnabledComponentConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types
type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> &
	Partial<AuthEnabledComponentConfig>;

interface AppWithAuthProps extends AppProps {
	Component: NextComponentWithAuth;
}

function Auth({ children }: Props) {
	const [session, loading] = useSession();
	const isUser = !!session?.user;
	useEffect(() => {
		if (loading) return; // Do nothing while loading
		if (!isUser) signIn(); // If not authenticated, force log in
	}, [isUser, loading]);

	if (isUser) {
		return <>{children}</>;
	}

	// Session is being fetched, or no user.
	// If no user, useEffect() will redirect.
	return <LoadingTemplate></LoadingTemplate>;
}

function App({ Component, pageProps }: AppWithAuthProps) {
	return (
		<Provider session={pageProps.session}>
			<ApolloProvider client={client}>
				<ThemeProvider theme={defaultTheme}>
					<Normalize />
					<GlobalStyles />
					{Component.auth ? (
						<Auth>
							<Component {...pageProps} />
						</Auth>
					) : (
						<Component {...pageProps} />
					)}
				</ThemeProvider>
			</ApolloProvider>
		</Provider>
	);
}
export default App;
