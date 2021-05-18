import styled, { css } from "styled-components";
import { palette } from "styled-tools";
import nextLink from "next/link";

export interface ButtonStyleProps {
	variant: "primary" | "secondary";
}
const ButtonStyle = css<ButtonStyleProps>`
	font-weight: 600;
	margin: 0;
	appearance: none;
	text-align: center;
	line-height: inherit;
	font-size: inherit;
	text-decoration: none;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	border-radius: 4px;
	cursor: pointer;
	min-width: 10ch;
	min-height: 3rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: ${({ variant }) =>
		variant === "secondary" ? css`1px solid ${palette("primaryscale", 0)}` : 0};
	color: ${(props) =>
		props.variant === "secondary"
			? palette("primaryscale", 0)
			: palette("white")};
	background-color: ${({ variant }) => {
		if (variant === "primary") {
			return palette("primaryscale", 1);
		} else {
			return palette("white");
		}
	}};
	&:hover {
		background-color: ${({ variant }) => {
			if (variant === "primary") {
				return palette("primaryscale", 0);
			} else {
				return palette("primaryscale", 5);
			}
		}};
		color: ${(props) =>
			props.variant === "secondary"
				? palette("primaryscale", 0)
				: palette("white")};
	}
`;

export const Button = styled.button`
	${ButtonStyle}
`;

export const Anchor = styled.a`
	${ButtonStyle}
`;
