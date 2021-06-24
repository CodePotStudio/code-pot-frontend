import gql from "graphql-tag";

export default gql`
	fragment EnrollFields on Enroll {
		id
		challangeId
		userId
		status
		createdAt
		updatedAt
	}
`;
