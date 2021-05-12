import * as S from "./style";
import Drawer, { DrawerProps } from "../../molecules/drawer";

interface Props {
	drawers: DrawerProps[];
}

const Drawers = ({ drawers }: Props) => (
	<S.Wrapper>
		{drawers.map(({ key, title, content }) => (
			<Drawer key={key} title={title} content={content}></Drawer>
		))}
	</S.Wrapper>
);
export default Drawers;
