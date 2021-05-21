import styled from "styled-components";
import { palette } from "styled-tools";
import { CHCardGrid } from "components";

export const Wrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 6)};
	padding: ${palette("spaces", 5)} 0px;
`;

export const HeaderSectionWrapper = styled.div`
	display: flex;
	& > div > img {
		margin-right: ${palette("spaces", 2)};
	}
`;

export const AvatarWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BylineWrapper = styled.div``;
export const SectionWrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 3)};
`;
export const ContentWrapper = styled.div``;
export const StyledCHCardGrid = styled(CHCardGrid)`
	grid-template-columns: 1fr;
	@media screen and (min-width: 32rem) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;
