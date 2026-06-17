exports.handler = async (event) => {
  const name = event.queryStringParameters.name || "guest";

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}, here is your data!`,
      items: [1, 2, 3, 4]
    })
  };
};
