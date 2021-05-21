import { FormItem, Radio } from "components";
import * as S from "./style";

const PaymentMethod = () => (
	<S.Wrapper>
		<FormItem>
			<Radio checked={true}>계좌 이체</Radio>
		</FormItem>
	</S.Wrapper>
);
export default PaymentMethod;
