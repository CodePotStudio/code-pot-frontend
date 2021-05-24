import createUserMutation from "graphql/mutations/createUser.mutation";
import client from "../apollo/client";

// 신규 유저 생성하기
export const createUser = async (
	email: string,
	avatar: string | undefined | null,
	githubId: string | undefined
) => {
	const data = await client.mutate({
		mutation: createUserMutation,
		variables: {
			email: email,
			avatar: avatar,
			githubId: Number(githubId),
		},
	});
	return data;
};
