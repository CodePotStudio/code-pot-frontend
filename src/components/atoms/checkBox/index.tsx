import { forwardRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import * as S from "./style";

interface Props {
	defaultChecked?: boolean;
	label: string;
	name: string;
	onChange: (e: any) => void;
}

const CheckBox = forwardRef<HTMLInputElement, Props>(
	({ name, label, defaultChecked = false, onChange }: Props, ref) => {
		const [checked, setChecked] = useState<boolean>(defaultChecked);

		return (
			<S.Label>
				{/* hidden checkbox input 생성 */}
				<input
					style={{ display: "none" }}
					ref={ref}
					type="checkbox"
					name={name}
					onChange={(e) => {
						// react-hooks-form에 있는 Change 함수 먼저 업데이트
						onChange(e);
						setChecked(e.target.checked);
					}}
				/>
				<S.Wrapper>{checked && <FaCheck color={"black"} />}</S.Wrapper>
				{label}
			</S.Label>
		);
	}
);
export default CheckBox;
