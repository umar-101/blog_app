import { request, gql } from "graphql-request";

const NEXT_PUBLIC_GRAPHCMS_ENDPOINT = `https://api-ap-south-1.graphcms.com/v2/cl49d9px110s401w8gpzk8mfl/master`;
const graphqlAPI = NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last:3
        ){
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }
  
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getSimilartPosts = async () => {
  const query = gql`
    query = GetPostDetails($slug: String! , $categories : [String!]){
      posts(
          where: {slug_not: "slug", AND: {categories_some: {slug_in: "categories"}}}
          last:3
      ){
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }
  
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};
