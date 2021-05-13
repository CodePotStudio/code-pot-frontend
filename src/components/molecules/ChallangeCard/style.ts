import styled from "styled-components";
import { palette } from "styled-tools";
import { Badge, Image, Link } from "components";

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
`;

export const CardImage = styled(Image)`
	background-color: ${palette("grayscale", 6)};
	width: 100%;
	overflow: hidden;
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
