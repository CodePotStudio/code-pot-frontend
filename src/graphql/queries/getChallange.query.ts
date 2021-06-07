import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	${fragments.ChallangeFields}
	query getChallange($id: Int!) {
		getChallange(id: $id) {
			...ChallangeFields
		}
	}
`;
