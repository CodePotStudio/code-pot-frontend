import styled, { css } from "styled-components";
import Icon from "../../atoms/icon";
import { palette } from "styled-tools";

export interface ButtonStyleProps {
	variant: "primary" | "secondary" | "github";
}

const primaryStyle = css`
	border: none;
	color: ${palette("white")};
	background-color: ${palette("primaryscale", 1)};
	&:hover {
		background-color: ${palette("primaryscale", 0)};
		color: ${palette("white")};
	}
`;

const secondaryStyle = css`
	border: 1px solid ${palette("primaryscale", 0)};
	color: ${palette("primaryscale", 0)};
	background-color: ${palette("white")};
	&:hover {
		background-color: ${palette("primaryscale", 5)};
		color: ${palette("primaryscale", 0)};
	}
`;

const githubStyle = css`
	border: none;
	color: ${palette("white")};
	background-color: ${palette("grayscale", 1)};
	&:hover {
		background-color: ${palette("grayscale", 0)};
	}
`;

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
	// variant에 따른 버튼 스타일
	${({ variant }) => {
		switch (variant) {
			case "secondary":
				return secondaryStyle;
			case "github":
				return githubStyle;
			default:
				return primaryStyle;
		}
	}}
`;

export const Button = styled.button`
	${ButtonStyle}
`;

export const Anchor = styled.a`
	${ButtonStyle}
`;

export const StyledIcon = styled(Icon)`
	margin-right: ${palette("spaces", 1)};
`;
