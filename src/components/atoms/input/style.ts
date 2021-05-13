import styled from "styled-components";
import { ifProp, palette} from "styled-tools";

export interface StyleInputProps {
	/** is invalid? */
	invalid?: boolean;
	/** is disabled */
	disabled?: boolean;
}

export const Input = styled.input<StyleInputProps>`
	${(props) => props.theme.fontStyle.body2};
	height: 2.5rem;
	width: 100%;
	padding: 0 0.5rem;
	&::placeholder {
		color: ${palette("grayscale", 3)};
	}
	background-color: ${ifProp(
		"disabled",
		palette("grayscale", 6),
		palette("white")
	)};
	border: 1px solid
		${ifProp("invalid", palette("alert"), palette("grayscale", 2))};
	border-radius: 4px;
	&:focus {
		outline: none;
		border-color: ${palette("primary")};
		box-shadow: 0 0 0 1px ${palette("primary")};
	}
`;
