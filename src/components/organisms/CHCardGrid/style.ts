import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 1)};
	grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
`;
