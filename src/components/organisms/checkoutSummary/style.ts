import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 2)};
`;

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
