import { InMemoryCache } from "@apollo/client";
import { makeVar } from "@apollo/client";

const accessTokenCache = makeVar<null | string>(null);
export default new InMemoryCache();

export { accessTokenCache };
