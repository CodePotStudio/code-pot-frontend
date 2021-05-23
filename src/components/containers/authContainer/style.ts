import { smallContainerStyle } from "common/style/ContainerStyle";
import styled from "styled-components";
import { palette } from "styled-tools";

export interface ContainerStyleProps {
	backgroundColor?: string;
}

export const ContentWrapper = styled.div<ContainerStyleProps>`
	padding: ${palette("spaces", 6)} 0px 0px 0px;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ContentInnerWrapper = styled.div`
	${smallContainerStyle};
`;
