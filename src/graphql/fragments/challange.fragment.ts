import gql from "graphql-tag";

export default gql`
	fragment ChallangeFields on Challange {
		id
		thumbnail
		name
		remarks
		status
		startDateTime
		endDateTime
	}
`;
