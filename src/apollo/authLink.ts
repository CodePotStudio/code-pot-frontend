import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/client";

type Headers = {
	authorization?: string;
};

// 매 요청마다 토큰을 실어보내는 Link
const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
	const session = await getSession();
	const modifiedHeader = {
		headers: {
			...headers,
			authorization: session?.accessToken
				? `Bearer ${session.accessToken}`
				: "",
		},
	};
	return modifiedHeader;
});

export default authLink;
