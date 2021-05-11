import styled, { css } from "styled-components";
import { palette, theme } from "styled-tools";

export interface HeadingStyleProps {
	hasBorder?: boolean;
}
const HeadingStyle = css<HeadingStyleProps>`
	border-bottom: ${({ hasBorder }) =>
		hasBorder ? css`1px solid ${palette("grayscale", 4)}` : "none"};
`;
export const H1 = styled.h1<HeadingStyleProps>`
	${HeadingStyle}
	${theme("fontStyle.h1")}
`;

export const H2 = styled.h2<HeadingStyleProps>`
	${HeadingStyle}
	${theme("fontStyle.h2")}
`;

export const H3 = styled.h3<HeadingStyleProps>`
	${HeadingStyle}
	${theme("fontStyle.h3")}
`;

export const H4 = styled.h4<HeadingStyleProps>`
	${HeadingStyle}
	${theme("fontStyle.h4")}
`;

export const H5 = styled.h5<HeadingStyleProps>`
	${HeadingStyle}
	${theme("fontStyle.h5")}
`;

export const H6 = styled.h6<HeadingStyleProps>`
	${HeadingStyle}
	${theme("fontStyle.h6")}
`;

export const Subtitle1 = styled.h6<HeadingStyleProps>`
	${theme("fontStyle.subtitle1")}
`;

export const Subtitle2 = styled.h6<HeadingStyleProps>`
	${theme("fontStyle.subtitle2")}
`;

export const Body1 = styled.p`
	${theme("fontStyle.body1")}
`;

export const Body2 = styled.p`
	${theme("fontStyle.body2")}
`;

export const Caption = styled.span`
	${theme("fontStyle.caption")}
`;
