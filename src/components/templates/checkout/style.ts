import { Button } from "components";
import styled from "styled-components";
import { palette } from "styled-tools";

export const DescriptionWrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 6)};
	padding: ${palette("spaces", 5)} 0px ${palette("spaces", 2)} 0px;
`;
export const SectionWrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 3)};
`;
export const ContentWrapper = styled.div``;
export const SectionContentWrapper = styled.div``;
export const ButtonWrapper = styled.div`
	padding: ${palette("spaces", 3)} 0px;
	@media screen and (min-width: 32rem) {
		display: flex;
		justify-content: flex-end;
	}
`;
export const StyledButton = styled(Button)`
	width: 100%;
	@media screen and (min-width: 32rem) {
		width: 400px;
	}
`;
