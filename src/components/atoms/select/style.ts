import styled from "styled-components";
import { palette } from "styled-tools";

export const SelectWrapper = styled.div`
	display: flex;
`;

export const Select = styled.select`
	margin: 0;
	min-width: 0;
	display: block;
	width: 100%;
	padding: 8px 8px;
	font-size: inherit;
	line-height: inherit;
	border: 1px solid;
	border-radius: 4px;
	color: inherit;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	&:focus {
		border-color: ${palette("primary")};
		box-shadow: 0 0 0 1px ${palette("primary")};
	}
`;
