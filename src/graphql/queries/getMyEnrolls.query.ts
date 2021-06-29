import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	${fragments.EnrollFields}
	query getMyEnrolls($filter: MyEnrollFillter!) {
		myEnrolls(filter: $filter) {
			...EnrollFields
		}
	}
`;
