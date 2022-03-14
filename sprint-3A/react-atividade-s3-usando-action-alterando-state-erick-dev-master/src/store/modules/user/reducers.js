const initialState = {name: ""};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
	  case "CHANGE_NAME":
	    const { name } = action;
      console.log(action)
      return {name: name};

    default:
      return state;
  }
}

export default userReducer;