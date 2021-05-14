import styled from "styled-components";
import { palette, ifProp } from "styled-tools";
import { Badge, Image, Link } from "components";
import { status } from "types/data";

export interface ImageStyleProps {
	status: status;
}

export const Wrapper = styled.div`
	display: grid;
	border: 1px solid ${palette("grayscale", 4)};
	background-color: ${palette("white")};
	border-radius: 8px;
	transition: 0.2s ease;
	overflow: hidden;
	&:hover {
		transform: scale(1.02);
	}
`;

export const ImageWrapper = styled.div`
	display: inline-flex;
	position: relative;
`;

export const CardBadge = styled(Badge)`
	position: absolute;
	top: 8px;
	left: 8px;
	z-index: 9999;
`;

export const CardImage = styled(Image)`
	width: 100%;
	overflow: hidden;
`;

export const ImageBackground = styled.div<ImageStyleProps>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: "100%";
	width: "100%";
	background-color: ${palette("black")};
	opacity: ${ifProp({ status: "close" }, palette("opacityscale", 4), 0)};
`;

export const ContentWrapper = styled.div`
	padding: ${palette("spaces", 1)};
	display: flex;
	flex-direction: column;
`;

export const CardLink = styled(Link)`
	:hover,
	:focus {
		color: inherit;
		text-decoration-color: inherit;
	}
`;