import { largeContainerStyle } from "common/style/ContainerStyle";
import styled from "styled-components";

export interface ContainerStyleProps {
	backgroundColor?: string;
}

export const ContentWrapper = styled.div<ContainerStyleProps>`
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ContentInnerWrapper = styled.div`
	${largeContainerStyle};
`;
