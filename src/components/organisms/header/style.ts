import { NONAME } from "node:dns";
import styled, { css } from "styled-components";
import { palette } from "styled-tools";
import { largeContainerStyle } from "common/style/ContainerStyle";

export interface HeaderStyleProps {
	sticky: boolean;
}

const StickyStyle = css`
	border-bottom: 1px solid ${palette("grayscale", 5)};
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 99999;
	background-color: ${palette("white")};
	box-shadow: 0px 0px 4px 0px rgb(0 0 0 / 6%);
	padding: 0.75rem 0px;

	& > div {
		${largeContainerStyle};
		margin: 0 auto;
	}
`;

export const Wrapper = styled.div<HeaderStyleProps>`
	${({ sticky }) => {
		return sticky && StickyStyle;
	}}
`;

export const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 48px;
`;
