import { ThemeProvider } from "styled-components";
import defaultTheme from "../commons/style/themes/default";
import Normalize from "../commons/style/Normalize";
import GlobalStyles from "../commons/style/GlobalStyle";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Normalize />
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default App;
