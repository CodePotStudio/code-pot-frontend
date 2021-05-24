import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	mutation createUser($email: String!, $avatar: String, $githubId: Int!) {
		createUser(email: $email, avatar: $avatar, githubId: $githubId) {
			...UserFields
		}
	}
	${fragments.UserFields}
`;
