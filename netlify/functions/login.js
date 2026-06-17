exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");

  const username = body.username;
  const password = body.password;

  // 假設簡單驗證
  if (username === "admin" && password === "1234") {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, token: "abc123" })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false, message: "Invalid credentials" })
  };
};
