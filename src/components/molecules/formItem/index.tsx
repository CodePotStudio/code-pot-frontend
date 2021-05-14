import * as S from "./style";
import { Label } from "components";

interface Props extends S.FormItemStyleProps {
	label?: string;
	children: React.ReactNode;
	invalid?: boolean;
	caption?: string;
}

const FormItem = ({ label, children, direction, invalid, caption }: Props) => (
	<S.Wrapper>
		<S.FormItemWrapper direction={direction} invalid={invalid}>
			{label && <Label>{label}</Label>}
			{children}
		</S.FormItemWrapper>
		{invalid && <S.FormText variant="caption">{caption}</S.FormText>}
	</S.Wrapper>
);
export default FormItem;
