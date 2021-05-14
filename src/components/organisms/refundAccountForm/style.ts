import styled from "styled-components";
import { palette } from "styled-tools";

export const FormWrapper = styled.form`
	display: grid;
	grid-gap: ${palette("spaces", 4)};
`;

export const InputWrapper = styled.div`
	display: grid;
	grid-gap: ${palette("spaces", 1)};
`;
