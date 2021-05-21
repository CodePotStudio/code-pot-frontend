import styled from "styled-components";
import { palette } from "styled-tools";
import Button from "../../atoms/button";

export const NavigationBarWrapper = styled.ul`
	display: flex;
	position: relative;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;
	& > li:not(:first-of-type) {
		margin-left: ${palette("spaces", 1)};
	}
	@media screen and (min-width: 32rem) {
		& > li:nth-child(2) {
			display: block;
		}
	}
`;
export const NavigationBarItem = styled.li``;
export const LoginButton = styled(Button)``;
export const SignUpButton = styled(Button)`
	display: none;
	@media screen and (min-width: 32rem) {
		display: inline-flex;
	}
`;
