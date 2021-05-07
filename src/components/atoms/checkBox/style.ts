import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	width: 1rem;
	height: 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${palette("white")};
	border-radius: 0.2rem;
	border: 0.1rem solid ${palette("grayscale", 2)};
	&:hover {
		background-color: ${palette("grayscale", 5)};
	}
`;
