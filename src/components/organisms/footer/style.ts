import styled from "styled-components";
import { palette, theme } from "styled-tools";

export const Container = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 1)};
`;

export const Content = styled.div`
	${theme("fontStyle.caption")}
	color: ${palette("grayscale", 2)};
	white-space: pre;
	text-overflow: ellipsis;
	overflow: hidden;
`;
