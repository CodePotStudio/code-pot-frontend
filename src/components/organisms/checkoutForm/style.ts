import { Button } from "components";
import styled from "styled-components";
import { palette } from "styled-tools";

export const FormWrapper = styled.form``;

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
