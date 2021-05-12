import styled from "styled-components";
import { Text } from "components";
import { ifProp, prop, palette } from "styled-tools";

export interface FormItemStyleProps {
	direction?: "row" | "column";
}

export const FormItemWrapper = styled.div<FormItemStyleProps>`
	display: flex;
	flex-direction: ${prop("direction", "column")};
	align-items: ${ifProp({ direction: "row" }, "center", "flex-start")};
	& > label {
		margin-right: ${ifProp({ direction: "row" }, "8px", "none")};
	}
`;

export const FormText = styled(Text)`
	color: ${palette("alertscale", 1)};
`;