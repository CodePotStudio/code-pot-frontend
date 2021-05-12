import { useState } from "react";
import * as S from "./style";
import { Icon } from "components";
import { ICONS } from "components/atoms/icon/constants";

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
			<S.DrawerTitle onClick={handleClick} key={key}>
				{title}
				<Icon name={arrowIcon}></Icon>
			</S.DrawerTitle>
			{showContent && <S.ContentWrapper>{content}</S.ContentWrapper>}
		</S.Wrapper>
	);
};
export default Drawer;
