import { FOOTER_CONTENT } from "./constants";
import * as S from "./style";

const Footer = () => (
	<S.Container>
		<S.CompanyTitle>주식회사 코드팟컴퍼니</S.CompanyTitle>
		<S.Content>{FOOTER_CONTENT}</S.Content>
	</S.Container>
);
export default Footer;
