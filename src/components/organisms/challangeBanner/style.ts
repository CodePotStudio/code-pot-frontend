import styled from "styled-components";
import { palette } from "styled-tools";
import { Image } from "components";

export const Wrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 4)};
	grid-template-columns: 1fr;
	color: ${palette("black")};
	@media screen and (min-width: 32rem) {
		grid-template-columns: 256px 1fr;
		justify-content: stretch;
	}
`;

export const ContentWrapper = styled.div`
	align-self: end;
`;

export const ImageWrapper = styled.div`
	display: inline-flex;
	position: relative;
	border-radius: 8px;
	overflow: hidden;
`;

export const CardImage = styled(Image)`
	width: 100%;
`;

export const ImageBackground = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: "100%";
	width: "100%";
`;
