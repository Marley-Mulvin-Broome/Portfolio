import { s as searchUsers } from "../../../../../chunks/githubDb.js";
import { j as json } from "../../../../../chunks/index.js";
async function GET({ url }) {
  const username = url.searchParams.get("searchString") ?? "Search";
  let limit = parseInt(url.searchParams.get("limit")) ?? 3;
  if (isNaN(limit)) {
    limit = 3;
  }
  const users = await searchUsers(username, limit) ?? {};
  return json(users);
}
export {
  GET
};
