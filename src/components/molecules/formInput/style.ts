import styled from "styled-components";
import { Caption } from "components";
import { palette } from "styled-tools";

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FormCaption = styled(Caption)`
	color: ${palette("alertscale", 1)};
`;
