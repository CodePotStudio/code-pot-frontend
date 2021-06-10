import styled from "styled-components";
import { Heading, Icon, Text } from "components";
import { palette } from "styled-tools";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: ${palette("spaces", 8)};
`;

export const StyledHeading = styled(Heading)`
	margin-bottom: ${palette("spaces", 3)};
`;

export const StyledIcon = styled(Icon)`
	margin-bottom: ${palette("spaces", 3)};
`;

export const StyledText = styled(Text)`
	margin-bottom: ${palette("spaces", 4)};
	text-align: center;
`;
