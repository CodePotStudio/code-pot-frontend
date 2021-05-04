import { ThemeProvider } from "styled-components";
import defaultTheme from "commons/style/themes/default";
import Normalize from "commons/style/Normalize";
import GlobalStyles from "commons/style/GlobalStyle";

function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Normalize />
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default App;
