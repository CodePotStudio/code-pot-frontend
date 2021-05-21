import { AuthTemplate } from "components";
import * as S from "./style";

interface Props {
	title: string;
	refundAccountForm: React.ReactNode;
}

const RegisterRefundAccountTemplate = ({ title, refundAccountForm }: Props) => (
	<AuthTemplate>
		<S.StyledHeading variant="h3">{title}</S.StyledHeading>
		<S.Wrapper>{refundAccountForm}</S.Wrapper>
	</AuthTemplate>
);
export default RegisterRefundAccountTemplate;
