import { useState } from "react";
import * as S from "./style";
import { ICONS } from "../../atoms/icon/constants";
import Icon from "../../atoms/icon";
import { Heading } from "../../atoms/typography";

export interface DrawerProps {
	key: number;
	title: string;
	content: string;
}

const Drawer = ({ key, title, content }: DrawerProps) => {
	const [showContent, setShowContent] = useState<boolean>(false);
	const [arrowIcon, setArrowIcon] = useState<ICONS>(ICONS.chevronRight);
	const handleClick = () => {
		if (showContent) {
			setShowContent(false);
			setArrowIcon(ICONS.chevronRight);
		} else {
			setShowContent(true);
			setArrowIcon(ICONS.chevronDown);
		}
	};

	return (
		<S.Wrapper>
			<S.DrawerTitleWrapper onClick={handleClick} key={key}>
				<Heading variant="subtitle1">{title}</Heading>
				<Icon name={arrowIcon}></Icon>
			</S.DrawerTitleWrapper>
			{showContent && (
				<S.ContentWrapper variant="body2">{content}</S.ContentWrapper>
			)}
		</S.Wrapper>
	);
};
export default Drawer;
