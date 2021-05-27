import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/client";

type Headers = {
	Authorization?: string;
};

// 매 요청마다 토큰을 실어보내는 Link
const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
	// headers에 강제로 Authorization을 넣은 경우를 분기 처리
	if (headers?.Authorization) {
		return headers;
	} else {
		const session = await getSession();
		const modifiedHeader = {
			headers: {
				...headers,
				Authorization: session?.accessToken
					? `Bearer ${session.accessToken}`
					: "",
			},
		};
		return modifiedHeader;
	}
	return headers;
});

export default authLink;
