import ContentContainer from "../../containers/contentContainer";
import { Heading } from "components";
import styled from "styled-components";
import { palette } from "styled-tools";

export const ChallangeBannerWrapper = styled(ContentContainer)`
	padding: ${palette("spaces", 4)} 0px;
	border-bottom: 0.5px solid ${palette("grayscale", 4)};
`;

export const ChallangeDescWrapper = styled(ContentContainer)``;

export const HeadingWrapper = styled(Heading)`
	margin-bottom: ${palette("spaces", 2)};
`;

export const ChallangeContentWrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 6)};
	padding: ${palette("spaces", 7)} 0px;
`;

export const RegisterBannerWrapper = styled(ContentContainer)`
	position: fixed;
	background-color: ${palette("white")};
	width: 100%;
	border-top: 0.5px solid ${palette("grayscale", 5)};
	bottom: 0;
	left: 0;
	padding: ${palette("spaces", 2)} 0px;
`;
