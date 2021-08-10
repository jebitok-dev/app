const auth = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.auth_token) {
    const token = { authorization: `${user.auth_token}` };
    return token;
  }
  return {};
};

export default auth;
