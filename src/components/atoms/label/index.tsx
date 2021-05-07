import * as S from "./style";

interface Props {
	children: React.ReactNode;
}

const Label = ({ children }: Props) => <S.Label>{children}</S.Label>;
export default Label;
