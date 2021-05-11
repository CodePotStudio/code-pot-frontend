import * as S from "./style";

export interface Props extends S.HeadingStyleProps {
	children: React.ReactNode;
}

const H1 = ({ children, hasBorder }: Props) => (
	<S.H1 hasBorder={hasBorder}>{children}</S.H1>
);
const H2 = ({ children }: Props) => <S.H2>{children}</S.H2>;
const H3 = ({ children }: Props) => <S.H3>{children}</S.H3>;
const H4 = ({ children }: Props) => <S.H4>{children}</S.H4>;
const H5 = ({ children }: Props) => <S.H5>{children}</S.H5>;
const H6 = ({ children }: Props) => <S.H6>{children}</S.H6>;
const Subtitle1 = ({ children }: Props) => (
	<S.Subtitle1>{children}</S.Subtitle1>
);
const Subtitle2 = ({ children }: Props) => (
	<S.Subtitle2>{children}</S.Subtitle2>
);
const Body1 = ({ children }: Props) => <S.Body1>{children}</S.Body1>;
const Body2 = ({ children }: Props) => <S.Body2>{children}</S.Body2>;

export { H1, H2, H3, H4, H5, H6, Subtitle1, Subtitle2, Body1, Body2 };
