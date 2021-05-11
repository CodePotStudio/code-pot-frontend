import { FOOTER_CONTENT } from "./constants";
import * as S from "./style";
import { Heading } from "components";

const Footer = () => (
	<S.Container>
		<Heading variant="h6">주식회사 코드팟컴퍼니</Heading>
		<S.Content>{FOOTER_CONTENT}</S.Content>
	</S.Container>
);
export default Footer;
