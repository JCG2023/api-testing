// netlify/functions/profile.js
exports.handler = async (event) => {
  const auth = event.headers.authorization || "";
  const token = auth.replace("Bearer ", "");

  // 跟 login.js 對應：token = "abc123"
  if (token !== "abc123") {
    return {
      statusCode: 401,
      body: JSON.stringify({ success: false, message: "Unauthorized" })
    };
  }

  // 這裡示範回一些假資料
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      user: {
        username: "admin",
        role: "tester"
      }
    })
  };
};
