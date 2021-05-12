import styled from "styled-components";
import { palette } from "styled-tools";

export const NavigationWrapper = styled.div`
	position: fixed;
	top: 64px;
	left: 0;
	right: 0;
	background-color: ${palette("white")};
	z-index: 10000;
	@media screen and (min-width: 32rem) {
		width: 200px;
		left: auto;
		right: 16px;
	}
`;

export const Navigation = styled.ul`
	display: flex;
	align-items: strech;
	flex-direction: column;
	padding: ${palette("spaces", 1)} ${palette("spaces", 1)};
	& > li:first-of-type {
		border-top: 1px solid ${palette("grayscale", 4)};
	}
	@media screen and (min-width: 32rem) {
		border: 1px solid ${palette("grayscale", 4)};
		& > li:first-of-type {
			border-top: 0px none;
		}
	}
`;

export const NavigationItem = styled.li`
	text-align: center;
	padding: ${palette("spaces", 1)} 0px;
	border-bottom: 1px solid ${palette("grayscale", 4)};
	@media screen and (min-width: 32rem) {
		border-bottom: 0px none;
		text-align: left;
	}
`;
