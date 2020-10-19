const INITIAL_STATE = {
  all_users: [],
  page: null,
  total: null,
  loading: true,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, loading: false };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        all_users: state.all_users.concat(action.payload.data.data),
        page: action.payload.data.page,
        total: action.payload.data.total,
      };
    default:
      return state;
  }
};

export default usersReducer;
