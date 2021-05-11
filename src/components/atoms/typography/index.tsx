import * as S from "./style";

export interface Props extends S.HeadingStyleProps {
	children: React.ReactNode;
}

const H1 = ({ children, ...props }: Props) => (
	<S.H1 {...props}>{children}</S.H1>
);
const H2 = ({ children, ...props }: Props) => (
	<S.H2 {...props}>{children}</S.H2>
);
const H3 = ({ children, ...props }: Props) => (
	<S.H3 {...props}>{children}</S.H3>
);
const H4 = ({ children, ...props }: Props) => (
	<S.H4 {...props}>{children}</S.H4>
);
const H5 = ({ children, ...props }: Props) => (
	<S.H5 {...props}>{children}</S.H5>
);
const H6 = ({ children, ...props }: Props) => (
	<S.H6 {...props}>{children}</S.H6>
);
const Subtitle1 = ({ children, ...props }: Props) => (
	<S.Subtitle1 {...props}>{children}</S.Subtitle1>
);
const Subtitle2 = ({ children, ...props }: Props) => (
	<S.Subtitle2 {...props}>{children}</S.Subtitle2>
);
const Body1 = ({ children, ...props }: Props) => (
	<S.Body1 {...props}>{children}</S.Body1>
);
const Body2 = ({ children, ...props }: Props) => (
	<S.Body2 {...props}>{children}</S.Body2>
);
const Caption = ({ children, ...props }: Props) => (
	<S.Caption {...props}>{children}</S.Caption>
);

export { H1, H2, H3, H4, H5, H6, Subtitle1, Subtitle2, Body1, Body2, Caption };
