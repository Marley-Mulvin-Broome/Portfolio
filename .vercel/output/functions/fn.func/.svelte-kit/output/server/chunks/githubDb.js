import { graphql, GraphqlResponseError } from "@octokit/graphql";
const GITHUB_TOKEN = "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";
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${GITHUB_TOKEN}`
  }
});
const getUserDetails = async (username) => {
  const query = `
        query($username: String!) {
            user(login: $username) {
                name
                avatarUrl
                bio
                followers {
                    totalCount
                }
                following {
                    totalCount
                }
                repositories {
                    totalCount
                }

                contributionsCollection {
                    contributionCalendar {
                      totalContributions
                    }
                }
            }
            
        }
    `;
  try {
    const response = await graphqlWithAuth(query, {
      username
    });
    return response.user;
  } catch (error) {
    if (error instanceof GraphqlResponseError) {
      console.log("Request failed:", error.request);
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
  return null;
};
const searchUsers = async (queryString, limit = 3) => {
  const query = `
        query($name: String!, $limit: Int!) { 
            search(query: $name, type: USER, first:$limit) {
                userCount
                    nodes {
                        ... on User {
                            name
                            login
                            avatarUrl
                            bio
                        }
                    }
            }
        }
    `;
  try {
    const response = await graphqlWithAuth(query, {
      name: queryString,
      limit
    });
    return response.search;
  } catch (error) {
    if (error instanceof GraphqlResponseError) {
      console.log("Request failed:", error.request);
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
  return null;
};
export {
  getUserDetails as g,
  searchUsers as s
};
