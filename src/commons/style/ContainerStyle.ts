import { css } from "styled-components";
import { palette } from "styled-tools";

export const largeContainerStyle = css`
	max-width: 100%;
	padding: 0 ${palette("spaces", 2)};

	@media screen and (min-width: 64rem) {
		width: 100%;
		max-width: 1060px;
		margin: auto;
		padding: 0 ${palette("spaces", 3)};
	}
`;

export const smallContainerStyle = css`
	max-width: 432px;
	margin: 0 auto;
	padding: 0 ${palette("spaces", 2)};
`;
