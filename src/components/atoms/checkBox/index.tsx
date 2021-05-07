import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import * as S from "./style";

interface Props {
	checked: boolean;
	onClick: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		isChecked?: boolean
	) => void;
}

const CheckBox = ({ checked, onClick }: Props) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);
	return (
		<S.Wrapper
			onClick={(event) => {
				onClick && onClick(event, !isChecked);
				setIsChecked(!isChecked);
			}}
		>
			{isChecked && <FaCheck color={"black"} />}
		</S.Wrapper>
	);
};
export default CheckBox;
