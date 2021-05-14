import { forwardRef } from "react";
import * as S from "./style";

interface Props extends S.StyleInputProps {
	/** name of input */
	inputName: string;
	/** defaultValue of input */
	defaultValue?: string;
	/** placeholder content */
	placeholder?: string;
	/** input value(state) */
	value?: string | number;
	/** onChange handler(setState) */
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	/** onFocusOut handler */
	onFocusOut?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ inputName, ...props }: Props) => (
		<S.Input name={inputName} {...props}></S.Input>
	)
);
export default Input;
