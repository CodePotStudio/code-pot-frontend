import ContentContainer from "../../containers/contentContainer";
import styled from "styled-components";
import { palette } from "styled-tools";

export const HeroWrapper = styled(ContentContainer)`
	padding: ${palette("spaces", 4)} 0px;
`;

export const ChallangeGridWrapper = styled(ContentContainer)`
	padding: ${palette("spaces", 4)} 0px;
	background-color: ${palette("grayscale", 6)};
`;

export const EpilogueGridWrapper = styled(ContentContainer)`
	padding: ${palette("spaces", 4)} 0px;
	border-bottom: 1px solid ${palette("grayscale", 5)};
`;
export const FAQGridWrapper = styled(ContentContainer)`
	padding: ${palette("spaces", 4)} 0px;
`;
