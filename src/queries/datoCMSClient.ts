import { GraphQLClient } from "graphql-request";

const datoCMSClient = new GraphQLClient("https://graphql.datocms.com", {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_READONLY_TOKEN}`,
    "X-Environment": process.env.REACT_APP_DATOCMS_ENVIRONMENT || "main",
  },
});

export default datoCMSClient;
