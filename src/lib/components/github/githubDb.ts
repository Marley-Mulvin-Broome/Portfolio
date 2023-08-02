import { graphql, GraphqlResponseError, type GraphQlQueryResponseData } from "@octokit/graphql";

import { GITHUB_TOKEN } from "$env/static/private";

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${GITHUB_TOKEN}`,
    },
});

export const getUserDetails = async (username: string) => {
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
        const response: GraphQlQueryResponseData = await graphqlWithAuth(query, {
            username,
        });

        return response.user;
    } catch(error) {
        if (error instanceof GraphqlResponseError) {
            console.log("Request failed:", error.request);
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
    
    return null;
}

export const searchUsers = async (queryString: string, limit: number = 3) =>  {
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
        const response: GraphQlQueryResponseData = await graphqlWithAuth(query, {
            name: queryString, limit
        });

        return response.search;
    } catch(error) {
        if (error instanceof GraphqlResponseError) {
            console.log("Request failed:", error.request);
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
    
    return null;
}