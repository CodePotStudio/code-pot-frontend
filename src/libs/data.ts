import createUserMutation from "graphql/mutations/createUser.mutation";
import getMeQuery from "graphql/queries/getMe.query";
import {
	CreateUserMutation,
	CreateUserMutationVariables,
	GetMeQuery,
} from "types/graphql/generated-types";
import client from "../apollo/client";

// 신규 유저 생성하기
export const createUser = async (
	email: string,
	avatar: string | undefined | null,
	githubId: string | undefined
) => {
	const result = await client.mutate<
		CreateUserMutation,
		CreateUserMutationVariables
	>({
		mutation: createUserMutation,
		variables: {
			email: email,
			avatar: avatar,
			githubId: Number(githubId),
		},
	});
	return result.data!.createUser;
};

export const getMe = async (accessToken: string) => {
	const result = await client.query<GetMeQuery>({
		query: getMeQuery,
		fetchPolicy: "no-cache",
		context: {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	});
	return { user: result.data!.me?.user, profile: result.data!.me?.profile };
};
