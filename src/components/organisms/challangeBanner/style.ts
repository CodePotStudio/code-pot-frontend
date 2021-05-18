import styled from "styled-components";
import { palette } from "styled-tools";

export interface CHBannerStyledProps {
	backgroundColor?: string;
	color?: string;
}

export const Wrapper = styled.div<CHBannerStyledProps>`
	display: grid;
	grid-gap: ${palette("spaces", 4)};
	grid-template-columns: 1fr;
	justify-content: center;
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : palette("grayscale", 2)};
	padding: ${palette("spaces", 2)};
	color: ${({ color }) => (color ? color : palette("white"))};
	@media screen and (min-width: 32rem) {
		grid-template-columns: 256px 1fr;
		justify-content: stretch;
	}
`;

export const ContentWrapper = styled.div`
	align-self: end;
`;
