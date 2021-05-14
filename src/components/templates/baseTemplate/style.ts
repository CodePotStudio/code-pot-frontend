import styled, { css } from "styled-components";
import { palette } from "styled-tools";

const commonStyle = css`
	max-width: 100%;
	padding: 0 ${palette("spaces", 2)};

	@media screen and (min-width: 64rem) {
		width: 100%;
		max-width: 1060px;
		margin: auto;
		padding: 0 ${palette("spaces", 3)};
	}
`;

export const HeaderWrapper = styled.div`
	border-bottom: 1px solid ${palette("grayscale", 5)};
	padding: ${palette("spaces", 1)} 0px;
`;

export const HeaderInnerWrapper = styled.div`
	${commonStyle};
`;

export const ChildrenWrapper = styled.div`
	min-height: 70vh;
	padding: ${palette("spaces", 5)} 0px;
`;

export const FooterWrapper = styled.div`
	background-color: ${palette("grayscale", 6)};
	padding: ${palette("spaces", 6)} 0px;
`;

export const FooterInnerWraper = styled.div`
	${commonStyle}
`;
