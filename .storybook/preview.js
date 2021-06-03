import * as nextImage from "next/image";
import * as nextLink from "next/link";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/common/style/themes/default";
import GlobalStyles from "../src/common/style/GlobalStyle";

// storybook에서 next/image 사용하도록 셋팅
Object.defineProperty(nextImage, "default", {
	configurable: true,
	value: (props) => <img {...props} />,
});

// storybook에서 next/link 사용하도록 셋팅
Object.defineProperty(nextLink, "default", {
	configurable: true,
	value: (props) => <a {...props} />,
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
