import styled from "styled-components";
import { palette } from "styled-tools";

export const HeaderWrapper = styled.div`
	padding: ${palette("spaces", 1)} 0px;
	min-height: 72px;
	display: flex;
	align-items: center;
`;

export const ChildrenWrapper = styled.div`
	min-height: 70vh;
`;
