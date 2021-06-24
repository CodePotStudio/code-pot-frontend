import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	mutation enrollChallange($challangeId: Int!) {
		enrollChallange(challangeId: $challangeId) {
			...EnrollFields
		}
	}
	${fragments.EnrollFields}
`;
