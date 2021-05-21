import { Heading, Button } from "components";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;
	@media screen and (min-width: 32rem) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;
export const StyledHeading = styled(Heading)`
	display: none;
	@media screen and (min-width: 32rem) {
		display: block;
	}
`;

export const StyledButton = styled(Button)`
	width: 100%;
	@media screen and (min-width: 32rem) {
		width: fit-content;
	}
`;
