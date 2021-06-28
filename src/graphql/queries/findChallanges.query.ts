import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	${fragments.ChallangeFields}
	query findChallanges($filter: ChallangeFilter) {
		findChallanges(filter: $filter) {
			...ChallangeFields
		}
	}
`;
