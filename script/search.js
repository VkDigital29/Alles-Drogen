/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "undefined",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  query Acetaminophen($distinct_on: [Search_select_column!] = Query, $where: Search_bool_exp = {}) {
    Search(where: $where, distinct_on: $distinct_on) {
      Query
    }
  }
`;

function fetchAcetaminophen(distinct_on, where) {
  return fetchGraphQL(
    operationsDoc,
    "Acetaminophen",
    {"distinct_on": distinct_on, "where": where}
  );
}

async function startFetchAcetaminophen(distinct_on, where) {
  const { errors, data } = await fetchAcetaminophen(distinct_on, where);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

startFetchAcetaminophen(distinct_on, where);
