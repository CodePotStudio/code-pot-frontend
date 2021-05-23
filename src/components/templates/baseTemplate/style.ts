import { largeContainerStyle } from "common/style/ContainerStyle";
import styled from "styled-components";
import { palette } from "styled-tools";

export const HeaderWrapper = styled.div`
	border-bottom: 1px solid ${palette("grayscale", 5)};
	padding: ${palette("spaces", 1)} 0px;
`;

export const HeaderInnerWrapper = styled.div`
	${largeContainerStyle};
`;

export const ChildrenWrapper = styled.div`
	min-height: 70vh;
`;

export const FooterWrapper = styled.div`
	background-color: ${palette("grayscale", 6)};
	padding: ${palette("spaces", 6)} 0px;
`;

export const FooterInnerWraper = styled.div`
	${largeContainerStyle};
`;
