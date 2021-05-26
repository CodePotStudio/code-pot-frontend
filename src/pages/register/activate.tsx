import { ActivateAccountTemplate, ActivationForm, Seo } from "components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActivateUserMutation } from "types/graphql/generated-types";
import { ActivationFormValues } from "../../components/organisms/activationForm";

export default () => {
	const router = useRouter();
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
			router.back();
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
