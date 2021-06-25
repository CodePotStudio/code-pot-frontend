import { BaseTemplate, ContentContainer } from "components";

interface Props {
	checkoutForm: React.ReactNode;
}

const ChallangeCheckoutTemplate = ({ checkoutForm }: Props) => (
	<BaseTemplate>
		<ContentContainer>{checkoutForm}</ContentContainer>
	</BaseTemplate>
);
export default ChallangeCheckoutTemplate;
