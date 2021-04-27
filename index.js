// action creator
// action creator = 
// is a function that returns a plain JAVASCRIPT OBJECT
// plain javascript = the action
// Action -. what are the properties

const createPolicy = (name, monthlyFee) => {
  return {
    // Action
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      monthlyFee: monthlyFee
    }
  }
}

const createClaim = (name, amount) => {
  return {
    // Action
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amount
    }
  }
}

// Reducer is a function == example is equal to a department
// functionality of a reducer ==> to change the state in the store based upon the action.typ & payload
// each department, each reducer changes a slice of data in the store
// each reducer takes to arguments =. ALWAYS IN THIS ORDER!!!!
// first argument = the current state - list of policies
// second argument = the action

const policies = (oldListOfPolicies, action) => {
  if(action.type == 'CREATE_POLICY') {
    // do something
    return [...oldListOfPolicies, action.payload];
  }
  // we don't care about this action
  return oldListOfPolicies;
};

const claimHistory = (oldListOfPolicies, action) => {
  if(action.type == 'CREATE_CLAIM') {
    // do something
    return [...oldListOfClaims, action.payload];
  }
  // we don't care about this action
  return oldListOfClaims;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  //reducer: reducer,
  policies: policies,
  claimsHistory: claimHistory
});

const store = createStore(ourDepartments);

store;

const action = createPolicy('Mark', 100);

store.dispatch(action)