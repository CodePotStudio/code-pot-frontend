import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	row-gap: ${palette("spaces", 3)};
	column-gap: ${palette("spaces", 4)};
	@media screen and (min-width: 32rem) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
