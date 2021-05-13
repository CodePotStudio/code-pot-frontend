import { Heading } from "components";
import { FOOTER_CONTENT } from "./constants";
import * as S from "./style";

const Footer = () => (
	<S.Container>
		<Heading variant="h6">주식회사 코드팟컴퍼니</Heading>
		<S.FooterText variant="caption">{FOOTER_CONTENT}</S.FooterText>
	</S.Container>
);
export default Footer;
