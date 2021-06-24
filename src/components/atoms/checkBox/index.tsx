import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import * as S from "./style";

interface Props {
	checked?: boolean;
	children: React.ReactNode;
	onClick: (
		event: React.MouseEvent<HTMLLabelElement, MouseEvent>,
		isChecked?: boolean
	) => void;
}

const CheckBox = ({ checked = false, onClick, children }: Props) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);
	return (
		<S.Label
			onClick={(event) => {
				onClick && onClick(event, !isChecked);
				setIsChecked(!isChecked);
			}}
		>
			<S.Wrapper>{isChecked && <FaCheck color={"black"} />}</S.Wrapper>
			{children}
		</S.Label>
	);
};
export default CheckBox;
