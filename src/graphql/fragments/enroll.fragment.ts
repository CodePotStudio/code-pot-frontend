import gql from "graphql-tag";
import ChallangeFields from "./challange.fragment"

export default gql`
	${ChallangeFields}
	fragment EnrollFields on Enroll {
		id
		challangeId
		userId
		status
		createdAt
		updatedAt
		challange {
			...ChallangeFields
		}
	}
`;
