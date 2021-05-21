import styled from "styled-components";

export interface ImageStyleProps {
	width?: string;
}

export const Image = styled.img<ImageStyleProps>`
	width: ${({ width }) => (width ? width : "inherit")};
	height: inherit;
	object-fit: inherit;
`;
