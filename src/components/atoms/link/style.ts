import styled, { css } from "styled-components";
import nextLink from "next/link";
import { palette } from "styled-tools";

const LinkStyle = css`
	:hover,
	:focus {
		color: ${palette("primary")};
		text-decoration-color: ${palette("primary")};
	}
	:visited {
		color: inherit;
	}
`;

export const Link = styled(nextLink)`
	${LinkStyle}
`;

export const Anchor = styled.a`
	${LinkStyle}
`;
