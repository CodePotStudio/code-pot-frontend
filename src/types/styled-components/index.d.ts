import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			primary: string;
			secondary: string;
			warning: string;
			alert: string;
			success: string;
			white: string;
			black: string;
			transparent: string;
			primaryscale: string[];
			secondaryscale: string[];
			warningscale: string[];
			alertscale: string[];
			grayscale: string[];
			opacityscale: number[];
			spaces: string[];
		};
		fontStyle: {
			h1: string;
			h2: string;
			h3: string;
			h4: string;
			h5: string;
			h6: string;
			h7: string;
			subtitle1: string;
			subtitle2: string;
			body1: string;
			body2: string;
			button: string;
			caption: string;
			overline: string;
		};
	}
}
