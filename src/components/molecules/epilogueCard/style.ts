import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	border: 1px solid ${palette("grayscale", 4)};
	background-color: ${palette("white")};
	border-radius: 8px;
	padding: ${palette("spaces", 1)};
	display: flex;
	flex-direction: column;
`;

export const EpilogueTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: ${palette("spaces", 1)};
	& > h6 {
		margin-left: 8px;
	}
`;

export const ContentWrapper = styled.div`
	padding: ${palette("spaces", 1)};
`;
