import { AuthTemplate } from "components";
import { ICONS } from "components/atoms/icon/constants";
import * as S from "./style";

interface Props {
	title: string;
	activationForm: React.ReactNode;
}

const ActivateAccountTemplate = ({ title, activationForm }: Props) => (
	<AuthTemplate>
		<S.StyledHeading variant="h3">{title}</S.StyledHeading>
		<S.Wrapper>{activationForm}</S.Wrapper>
	</AuthTemplate>
);
export default ActivateAccountTemplate;
