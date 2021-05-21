import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	& > h1 {
		margin-bottom: ${palette("spaces", 4)};
	}
	& > p {
		margin-bottom: ${palette("spaces", 3)};
	}
`;

export const StrongText = styled.span`
	color: ${palette("primaryscale", 1)};
	line-height: inherit;
	font-weight: inherit;
`;
