import * as S from "./style";
import { DrawerProps } from "components/molecules/drawer";
import { Drawer } from "components";

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
