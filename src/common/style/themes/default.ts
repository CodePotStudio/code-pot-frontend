const theme = {
	palette: {
		primary: "#3221BF",
		secondary: "#04BD8D",
		warning: "#FDB431",
		alert: "#C8191F",
		success: "#388e3c",
		white: "#ffffff",
		black: "#1A1A1A",
		transparent: "transparent",
		primaryscale: [
			"#3221BF",
			"#3F29EE",
			"#6554F2",
			"#8C7FF5",
			"#9F94F7",
			"#C5BFFA",
		],
		secondaryscale: ["#04BD8D", "#06D19C", "#38DAB0"],
		warningscale: ["#FDB431", "#FDC35A", "#FED283"],
		alertscale: ["#C8191F", "#E13338", "#EF8E91"],
		grayscale: [
			"#2f2f2f",
			"#707070",
			"#A1A1A1",
			"#bebebe",
			"#EBEBEB",
			"#F4F4F4",
			"#F9FAFB",
		],
		opacityscale: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05],
		spaces: [
			"0.25rem", // 4px
			"0.75rem", // 8px
			"1rem", // 16px
			"1.5rem", // 24px
			"2rem", // 32px
			"3rem", // 48px
			"4rem", // 64px
			"6rem", // 96px
			"8rem", // 128px
			"12rem", // 192px
			"16rem", // 256px
			"24rem", // 384px
		],
	},
	fontStyle: {
		h1: `
      font-size: 4.5rem;
      font-weight: 700;
      line-height: 1.8;
    `,
		h2: `
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.8;
    `,
		h3: `
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.8;
    `,
		h4: `
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.8;
    `,
		h5: `
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.8;
    `,
		h6: `
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.8;
    `,
		h7: `
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.8;
    `,
		subtitle1: `
      font-size: 1rem;
      font-weight: 500;
			line-height: 1.75;
			letter-spacing: 0.00938em;
    `,
		subtitle2: `
      font-size: 0.875rem;
      font-weight: 500;
			line-height: 1.57;
			letter-spacing: 0.00714em;
    `,
		body1: `
      font-size: 1rem;
      font-weight: 400;
			line-height: 1.5;
      letter-spacing: 0.00938em;
    `,
		body2: `
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: 0.01071em;
    `,
		button: `
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.0125rem;
    `,
		caption: `
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0.03333em;
    `,
		overline: `
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.015rem;
    `,
	},
};

export default theme;
