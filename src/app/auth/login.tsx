const LoginPage = () => {
  const scope =
    "streaming \
    user-read-email \
    user-read-private";
  const state = "Random string 1000";
  const authParams = new URLSearchParams({
    response_type: "code",
    client_id: process.env.pricw,
    scope: scope,
    redirect_uri: "http://localhost:3000/auth/callback",
    state: state,
  });
  return <div>Dette er en login page</div>;
};
