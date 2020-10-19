export function getUsers(page) {
  return {
    type: "GET_USERS",
    payload: {
      client: "default",
      request: {
        url: `/users?page=${page}`,
        method: "get",
      },
    },
  };
}
