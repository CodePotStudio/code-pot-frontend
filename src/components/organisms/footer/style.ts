import styled from "styled-components";
import { palette, theme } from "styled-tools";
import { Text } from "components";

export const Container = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 1)};
`;

export const FooterText = styled(Text)`
	color: ${palette("grayscale", 2)};
	white-space: pre;
	text-overflow: ellipsis;
	overflow: hidden;
`;
