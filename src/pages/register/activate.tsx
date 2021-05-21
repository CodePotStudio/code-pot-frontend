import { ActivateAccountTemplate, ActivationForm } from "components";
import Seo from "components/molecules/Seo";

export default () => (
	<>
		<Seo></Seo>
		<ActivateAccountTemplate
			title="추가 정보 입력하기"
			activationForm={
				<ActivationForm onSubmit={() => console.log("hello")}></ActivationForm>
			}
		></ActivateAccountTemplate>
	</>
);
