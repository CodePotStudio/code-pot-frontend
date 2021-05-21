import { Text } from "components";
import { AddSeparator } from "utils/numberDecorator";
import * as S from "./style";

interface Props {
	// 예치금
	balance: number;
	// 플랫폼 수수료
	platformCommission: number;
}
const CheckoutSummary = ({ balance, platformCommission }: Props) => (
	<S.Wrapper>
		<S.ItemWrapper>
			<Text variant="body1">예치금</Text>
			<Text variant="body1">{AddSeparator(balance)}</Text>
		</S.ItemWrapper>
		<S.ItemWrapper>
			<Text variant="body1">플랫폼 수수료</Text>
			<Text variant="body1">{AddSeparator(platformCommission)}</Text>
		</S.ItemWrapper>
		<S.ItemWrapper>
			<Text variant="body1">총 결제 금액</Text>
			<Text variant="body1">{AddSeparator(balance + platformCommission)}</Text>
		</S.ItemWrapper>
	</S.Wrapper>
);
export default CheckoutSummary;
