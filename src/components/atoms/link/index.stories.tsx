import Link from ".";

export default {
	title: "Atoms/Link",
	component: [Link],
};

export const InternalLink = () => <Link to="/">내부 링크</Link>;
export const OutLink = () => (
	<Link href="http://www.github.com">go to github</Link>
);
export const LinkWithClick = () => (
	<Link onClick={() => console.log("Link Clicked")}>with Click handler</Link>
);
