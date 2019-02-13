function getUser() {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  return { token, user };
}

function setUser(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  return { token, user };
}

export { getUser, setUser };
