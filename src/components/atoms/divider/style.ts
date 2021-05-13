import styled from "styled-components";
import { palette } from "styled-tools";

export interface DividerStyleProps {
	borderWidth: string;
	borderStyle: "solid" | "dotted";
	grayScaleLevel: number;
}

export const Divider = styled.hr<DividerStyleProps>`
	margin: 0;
	min-width: 0;
	margin: 0;
	margin-top: 8px;
	margin-bottom: 8px;
	border: 0;
	border-bottom: ${({ borderWidth, borderStyle }) =>
		`${borderWidth} ${borderStyle}`};
	color: ${({ grayScaleLevel }) => palette("grayscale", grayScaleLevel)};
`;
