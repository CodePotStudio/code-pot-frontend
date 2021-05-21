import { ActivationForm } from "components";
import ActivateAccountTemplate from ".";

export default {
	title: "Templates/Activate Account Template",
	component: [ActivateAccountTemplate],
};

export const Default = () => (
	<ActivateAccountTemplate
		title="추가 정보 입력하기"
		activationForm={<ActivationForm onSubmit={() => console.log("hello")} />}
	/>
);
