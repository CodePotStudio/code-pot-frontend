import styled from "styled-components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100000;
	background: ${palette("grayscale", 6)};
	display: flex;
	justify-content: center;
	align-items: center;
`;
