import {
	ActivateAccountTemplate,
	ActivationForm,
	LoadingTemplate,
	Seo,
} from "components";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActivateUserMutation } from "types/graphql/generated-types";
import { ActivationFormValues } from "../../components/organisms/activationForm";

const activate = () => {
	const router = useRouter();
	const [session, loading] = useSession();
	const isActive = session?.user?.isActive;

	// session이 업데이트 된 것을 감지 시키기 위해 강제 새로고침
	const [activateUser] = useActivateUserMutation({
		onCompleted: () => window.location.replace("/"),
	});

	const handleSubmit = async ({
		name,
		mobile: originMobile,
	}: ActivationFormValues) => {
		const mobile = originMobile.replaceAll("-", "");
		await activateUser({ variables: { name, mobile } });
	};

	// 활성화된 유저가 들어 왔을 때 홈으로 보내기
	useEffect(() => {
		if (isActive) {
			router.push("/");
		}
	});

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
