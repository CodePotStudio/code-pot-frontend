import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 1)};
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export const LoadingWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 256px;
	justify-content: center;
	align-items: center;
`;
