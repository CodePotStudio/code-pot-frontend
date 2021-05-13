import styled from "styled-components";
import { palette } from "styled-tools";
import { Text } from "../../atoms/typography";

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FormText = styled(Text)`
	color: ${palette("alertscale", 1)};
`;
