import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import * as S from "./style";

interface Props {
	checked: boolean;
	children: React.ReactNode;
	onClick: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		isChecked?: boolean
	) => void;
}

const CheckBox = ({ checked, onClick, children }: Props) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);
	return (
		<S.Label>
			<S.Wrapper
				onClick={(event) => {
					onClick && onClick(event, !isChecked);
					setIsChecked(!isChecked);
				}}
			>
				{isChecked && <FaCheck color={"black"} />}
			</S.Wrapper>
			{children}
		</S.Label>
	);
};
export default CheckBox;
