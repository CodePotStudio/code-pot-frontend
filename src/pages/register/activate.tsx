import {
	ActivateAccountTemplate,
	ActivationForm,
	LoadingTemplate,
	Seo,
} from "components";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useActivateUserMutation } from "types/graphql/generated-types";
import { ActivationFormValues } from "../../components/organisms/activationForm";

const activate = () => {
	const router = useRouter();
	const [session, loading] = useSession();
	const isActive = session?.user?.isActive;
	const [activateUser] = useActivateUserMutation({
		onCompleted: (data) => {
			router.push("/");
		},
	});
	const handleSubmit = async ({
		name,
		mobile: originMobile,
	}: ActivationFormValues) => {
		const mobile = originMobile.replaceAll("-", "");
		await activateUser({ variables: { name, mobile } });
	};

	return (
		<>
			{isActive || loading ? (
				<LoadingTemplate />
			) : (
				<>
					<Seo></Seo>
					<ActivateAccountTemplate
						title="추가 정보 입력하기"
						activationForm={
							<ActivationForm onSubmit={handleSubmit}></ActivationForm>
						}
					></ActivateAccountTemplate>
				</>
			)}
		</>
	);
};

export default activate;
