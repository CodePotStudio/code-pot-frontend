import styled from "styled-components";
import { palette } from "styled-tools";
import { Text } from "../../atoms/typography";

export const Container = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 1)};
`;

export const FooterText = styled(Text)`
	color: ${palette("grayscale", 1)};
	white-space: pre;
	text-overflow: ellipsis;
	overflow: hidden;
`;
