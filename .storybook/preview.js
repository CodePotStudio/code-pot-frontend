import * as nextImage from "next/image";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/commons/style/themes/default";
import GlobalStyles from "../src/commons/style/GlobalStyle";

// storybook에서 next/image 사용하도록 셋팅
Object.defineProperty(nextImage, "default", {
	configurable: true,
	value: (props) => <img {...props} />,
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// storybook에 theming 적용하기
const themes = [defaultTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

// storybook에 global Style 적용하기
addDecorator((story) => (
	<>
		<GlobalStyles /> {story()}
	</>
));
