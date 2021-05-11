import * as S from "./style";

export interface Props extends S.HeadingStyleProps {
	children: React.ReactNode;
}

interface HeadingProps extends S.HeadingStyleProps {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2";
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
		case "subtitle1":
			return <S.Subtitle1 {...props}>{children}</S.Subtitle1>;
		case "subtitle2":
			return <S.Subtitle1 {...props}>{children}</S.Subtitle1>;
	}
};

const Body1 = ({ children, ...props }: Props) => (
	<S.Body1 {...props}>{children}</S.Body1>
);
const Body2 = ({ children, ...props }: Props) => (
	<S.Body2 {...props}>{children}</S.Body2>
);
const Caption = ({ children, ...props }: Props) => (
	<S.Caption {...props}>{children}</S.Caption>
);

export { Body1, Body2, Caption, Heading };
