import styled from "styled-components";
import { palette } from "styled-tools";

export const NavigationWrapper = styled.ul`
	display: flex;
	align-items: center;
	& > li:not(:first-of-type) {
		margin-left: ${palette("spaces", 1)};
	}
`;

export const NavigationItem = styled.li``;
