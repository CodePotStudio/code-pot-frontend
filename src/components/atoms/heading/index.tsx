import * as S from "./style";

export interface Props extends S.HeadingStyleProps {
	children: React.ReactNode;
}

const Heading = ({ variant, children, hasBorder }: Props) => {
	if (variant === "PageTitle") {
		return <S.PageTitle hasBorder={hasBorder}>{children}</S.PageTitle>;
	} else if (variant === "SectionTitle") {
		return <S.SectionTitle hasBorder={hasBorder}>{children}</S.SectionTitle>;
	} else if (variant === "SubTitle") {
		return <S.SubTitle hasBorder={hasBorder}>{children}</S.SubTitle>;
	}
};
export default Heading;
