import { g as getUserDetails } from "../../../../chunks/githubDb.js";
import { j as json } from "../../../../chunks/index.js";
async function GET({ url }) {
  const username = url.searchParams.get("username") ?? "torvalds";
  const user = await getUserDetails(username) ?? {};
  return json(user);
}
export {
  GET
};
