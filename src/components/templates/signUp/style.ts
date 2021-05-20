import styled from "styled-components";
import { Heading, Button } from "components";
import { palette } from "styled-tools";

export const StrongText = styled.span`
	color: ${palette("primaryscale", 1)};
	line-height: inherit;
	font-weight: inherit;
`;

export const StyledHeading = styled(Heading)`
	padding: ${palette("spaces", 6)} 0px;
`;

export const StyledButton = styled(Button)`
	width: 100%;
`;
