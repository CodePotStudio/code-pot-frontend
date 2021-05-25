import Router from "next/router";
import { NextComponentType, NextPageContext } from "next";
import { getSession } from "next-auth/client";
import { Session } from "next-auth";

const login = "/login?redirected=true"; // Define your login route address.

interface Context extends NextPageContext {
	session: Session;
}

const WithAuth = <P extends object>(
	WrappedComponent: NextComponentType<Context, {}, P>
): React.FC<P> => {
	const hocComponent = ({ ...props }) => <WrappedComponent {...(props as P)} />;

	hocComponent.getInitialProps = async (context: Context) => {
		const session = await getSession();

		// Are you an authorized user or not?
		if (!session) {
			// Handle server-side and client-side rendering.
			if (context.res) {
				context.res?.writeHead(302, {
					Location: login,
				});
				context.res?.end();
			} else {
				Router.replace(login);
			}
		} else if (WrappedComponent.getInitialProps) {
			console.log("hello");
			const wrappedProps = await WrappedComponent.getInitialProps({
				...context,
				session,
			});
			return { ...wrappedProps, session };
		}

		return { session };
	};

	return hocComponent;
};

export default WithAuth;
