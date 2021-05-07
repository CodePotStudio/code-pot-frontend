import styled, { css } from "styled-components";
import { palette } from "styled-tools";

export interface HeadingStyleProps {
	variant: "PageTitle" | "SectionTitle" | "SubTitle";
	hasBorder?: boolean;
}
const HeadingStyle = css<HeadingStyleProps>`
	border-bottom: ${({ hasBorder }) =>
		hasBorder ? css`1px solid ${palette("grayscale", 4)}` : "none"};
`;

export const PageTitle = styled.h1`
	${HeadingStyle}
`;

export const SectionTitle = styled.h2`
	${HeadingStyle}
`;

export const SubTitle = styled.h3`
	${HeadingStyle}
`;
