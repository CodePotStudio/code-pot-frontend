import { ActivateAccountTemplate, ActivationForm, Seo } from "components";
import { useEffect } from "react";
import { useActivateUserMutation } from "types/graphql/generated-types";
import { ActivationFormValues } from "../../components/organisms/activationForm";

const activate = () => {
	const [activateUser, { data }] = useActivateUserMutation();
	const handleSubmit = async ({
		name,
		mobile: originMobile,
	}: ActivationFormValues) => {
		const mobile = originMobile.replaceAll("-", "");
		await activateUser({ variables: { name, mobile } });
	};

	useEffect(() => {
		if (data) {
			// TODO: router.back이 동작 안함.
			window.history.back();
		}
	});

	return (
		<>
			<Seo></Seo>
			<ActivateAccountTemplate
				title="추가 정보 입력하기"
				activationForm={
					<ActivationForm onSubmit={handleSubmit}></ActivationForm>
				}
			></ActivateAccountTemplate>
		</>
	);
};

export default activate;
