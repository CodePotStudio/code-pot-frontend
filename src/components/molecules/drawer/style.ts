import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	border: 1px solid ${palette("grayscale", 4)};
	background-color: ${palette("white")};
	border-radius: 8px;
`;

export const DrawerTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	padding: ${palette("spaces", 1)};
	&:hover {
		color: ${palette("grayscale", 3)};
	}
`;

export const ContentWrapper = styled.div`
	padding: ${palette("spaces", 1)};
`;
