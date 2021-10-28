const initialValues = {
  width: window.innerWidth,
  header_route: "/",
};

export const Reducer = (state = initialValues, action) => {
  switch (action.type) {
    case "WIDTH":
      return {
        ...state,
        width: action.payload,
      };
    case "HEADER_ROUTE":
      return {
        ...state,
        header_route: action.payload,
      };

    default:
      return state;
  }
};
