import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	border: 1px solid ${palette("grayscale", 4)};
	background-color: ${palette("white")};
	padding: ${palette("spaces", 1)};
	border-radius: 8px;
`;

export const DrawerTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	&:hover {
		color: ${palette("grayscale", 3)};
	}
`;

export const ContentWrapper = styled.div`
	margin-top: ${palette("spaces", 1)};
`;
