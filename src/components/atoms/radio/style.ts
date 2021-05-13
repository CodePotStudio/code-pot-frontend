import styled from "styled-components";
import Icon from "../icon";

export const CheckedRadio = styled(Icon)`
	display: none;
	margin: 0px 4px 0px 0px;
	align-self: center;
`;
export const EmptyRadio = styled(Icon)`
	display: block;
	margin: 0px 4px 0px 0px;
	align-self: center;
`;

export const Label = styled.label`
	margin: 0px;
	min-width: 0px;
	width: 100%;
	display: flex;
`;

export const Wrapper = styled.div`
	margin: 0px;
	min-width: min-content;
	display: flex;
`;

export const Radio = styled.input`
	margin: 0;
	min-width: 0;
	position: absolute;
	opacity: 0;
	z-index: -1;
	width: 1px;
	height: 1px;
	&:checked ~ ${CheckedRadio} {
		display: block;
	}
	&:checked ~ ${EmptyRadio} {
		display: none;
	}
`;
