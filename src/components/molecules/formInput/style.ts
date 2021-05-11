import styled from "styled-components";
import { Text } from "components";
import { palette } from "styled-tools";

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FormText = styled(Text)`
	color: ${palette("alertscale", 1)};
`;
