import { Label } from "components";
import * as S from "./style";

interface Props extends S.FormItemStyleProps {
	label?: string;
	children: React.ReactNode;
	invalid?: boolean;
	caption?: string;
}

const FormItem = ({ label, children, direction, invalid, caption }: Props) => (
	<>
		<S.FormItemWrapper direction={direction}>
			{label && <Label>{label}</Label>}
			{children}
		</S.FormItemWrapper>
		{invalid && <S.FormText variant="caption">{caption}</S.FormText>}
	</>
);
export default FormItem;
