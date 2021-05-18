import * as S from "./style";

interface HeadingProps extends S.HeadingStyleProps {
	variant:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "h7"
		| "subtitle1"
		| "subtitle2";
	children: React.ReactNode;
}

interface TextProps {
	variant: "body1" | "body2" | "caption";
	children: React.ReactNode;
}

const Heading = ({ variant, children, ...props }: HeadingProps) => {
	switch (variant) {
		case "h1":
			return <S.H1 {...props}>{children}</S.H1>;
		case "h2":
			return <S.H2 {...props}>{children}</S.H2>;
		case "h3":
			return <S.H3 {...props}>{children}</S.H3>;
		case "h4":
			return <S.H4 {...props}>{children}</S.H4>;
		case "h5":
			return <S.H5 {...props}>{children}</S.H5>;
		case "h6":
			return <S.H6 {...props}>{children}</S.H6>;
		case "h7":
			return <S.H7 {...props}>{children}</S.H7>;
		case "subtitle1":
			return <S.Subtitle1 {...props}>{children}</S.Subtitle1>;
		case "subtitle2":
			return <S.Subtitle1 {...props}>{children}</S.Subtitle1>;
	}
};

const Text = ({ children, variant, ...props }: TextProps) => {
	switch (variant) {
		case "body1":
			return <S.Body1 {...props}>{children}</S.Body1>;
		case "body2":
			return <S.Body2 {...props}>{children}</S.Body2>;
		case "caption":
			return <S.Caption {...props}>{children}</S.Caption>;
	}
};

export { Text, Heading };
