import fetch from "node-fetch";

function fetchGraphQL(operationsDoc, operationName, variables) {
  return fetch(
    "undefined",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  ).then((result) => result.json());
}

const operationsDoc = `
  query GetSearch {
    Search(distinct_on: DrugsA) {
      DrugsA
    }
  }
`;

function fetchGetSearch() {
  return fetchGraphQL(
    operationsDoc,
    "GetSearch",
    {}
  );
}

fetchGetSearch()
  .then(({ data, errors }) => {
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
    // do something great with this precious data
    console.log(data);
  })
  .catch((error) => {
    // handle errors from fetch itself
    console.error(error);
  });
