const reducer =
  (type, initialData) =>
  (
    state = {
      loading: true,
      data: initialData || [],
    },
    action
  ) => {
    switch (action.type) {
      case `REQUEST/${type}`:
        return {
          ...state,
          loading: true,
        };
      case `OK/${type}`:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: false,
        };
      case `APPEND/${type}`:
        // There has to be a better way of doing this
        let isFound = false;
        for (let item of state.data) {
          if (item.id === action.payload.id) {
            isFound = true;
            break;
          }
        }
        return {
          ...state,
          data: !isFound
            ? [...state.data, action.payload]
            : state.data.map((el) => {
                if (el.id === action.payload.id) {
                  el.quantity += action.payload.quantity;
                }
                return el;
              }),
        };
      case `ERROR/${type}`:
        return {
          ...state,
          error: action.error || true,
          loading: false,
        };
      case `QUERY/${type}`:
        return {
          ...state,
          query: action.query,
        };
      case `ADD_ONE_QUANTITY/${type}`:
        return {
          ...state,
          data: state.data.map((el) => {
            if (el.id === action.payload.id) {
              el.quantity++;
            }
            return el;
          }),
        };
      case `REMOVE_ONE_QUANTITY/${type}`:
        return {
          ...state,
          data: state.data.map((el) => {
            if (el.id === action.payload.id) {
              if (el.quantity > 1) {
                el.quantity--;
              } else {
                el.quantity = 1;
              }
            }
            return el;
          }),
        };
      case `REMOVE_ALL_FROM_CART/${type}`:
        return {
          ...state,
          data: state.data.filter((el) => el.id !== action.payload.id),
        };
      case `DELETE/${type}`:
        return {
          ...state,
          data: state.data.filter((el) => !action.payload.ids.includes(el.id)),
        };
      default:
        return state;
    }
  };

export default reducer;
