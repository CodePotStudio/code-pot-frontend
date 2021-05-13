import { Heading, Text } from "components/atoms/typography";
import { language, LanguageSet, status, StatusSet } from "./constants";
import * as S from "./style";
import "moment/locale/ko";
import moment from "moment";

interface Props {
	language: language;
	status: status;
	to: string;
	start_at: Date;
}

const ClassCard = () => {
	return <div>Hello</div>;
};
export default ClassCard;
