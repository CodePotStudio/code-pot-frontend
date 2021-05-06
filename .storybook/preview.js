import * as nextImage from "next/image";

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
