import styled, { css } from "styled-components";
import { palette } from "styled-tools";
import { variant } from "types/data";

export interface BadgeStyleProps {
	variant: variant;
}

const BadgeStyle = css<BadgeStyleProps>`
	margin: 0;
	min-width: 0;
	display: inline-block;
	vertical-align: baseline;
	font-weight: 700;
	white-space: nowrap;
	border-radius: 4px;
	color: ${palette("white")};
	font-size: 14px;
	padding-left: 4px;
	padding-right: 4px;
	background-color: ${({ variant }) => {
		if (variant === "primary") {
			return palette("primaryscale", 1);
		} else if (variant === "secondary") {
			return palette("secondaryscale", 1);
		} else if (variant === "warning") {
			return palette("warningscale", 1);
		} else if (variant === "alert") {
			return palette("alertscale", 1);
		}
	}};
`;

export const Badge = styled.div`
	${BadgeStyle}
`;
