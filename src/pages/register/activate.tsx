import {
	ActivateAccountTemplate,
	ActivationForm,
	LoadingTemplate,
	Seo,
} from "components";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActivateUserMutation } from "types/graphql/generated-types";
import { ActivationFormValues } from "../../components/organisms/activationForm";
import { Session } from "next-auth";
import { GetServerSideProps } from "next";

interface Props {
	session: Session | null;
}

const activate: React.FC<Props> = ({ session }) => {
	const router = useRouter();
	const isActive = session?.user?.isActive;
	const [activateUser] = useActivateUserMutation({
		onCompleted: () => router.push("/"),
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
			{isActive ? (
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

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
	const session = await getSession(ctx);
	return { props: { session } };
};

export default activate;
