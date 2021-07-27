import { formActions } from "../actions/formActions";

const initialFormState = {
  show: false,
};

const form = (state = initialFormState, action) => {
  switch (action.type) {
    case formActions.TOGGLE_SHOW_FORM:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default form;