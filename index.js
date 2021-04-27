// Redux Cycle

// Step 1               Step 2        Step 5        Step 3        Step 4
// Action Creator       Action        Dispatch      Reducers      Store / State of the whole Redux application (lives next to React)

//STEP 1 && Step 2
// actionCreator that returns an action
// action creator ==> which creates an action!
// actioncreater =
// a function that returns a PLAIN JAVASCRIPT OBJECT
// plain javascript == ACTION
// Action - what are the properties?
const createPolicy = (name, monthlyFee) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name, // Mark
      monthlyFee: monthlyFee // 100
    }
  };
};

const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amount
    }
  };
};

// REDUCERS && STEP 3
// Reducer is a function == example equal to a department
// functionality of reducer ==> to change state in the store based upon the action.typ & payload.
// each deparment, each reducers changes a SLICE OF DATA in the store.
// each reducer takes 2 arguments => ALWAYS IN THIS ORDER!!!!!
// first argument = the current state - of the slice of data (list of policies)
// second argument = the ACTION (why? so you know what to change)
const policies = (oldListOfPolicies, action) => {
  if (action.type == "CREATE_POLICY") {
    return [...oldListOfPolicies, action.payload];
    //action.payload = {name: 'Mark', monthlyFee: 100}
  }
  return oldListOfPolicies;
};

const claimsHistory = (oldListOfClaims, action) => {
  if (action.type == "CREATE_CLAIM") {
    oldListOfClaims.push(action.payload);

    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

//Step 4
// We have written ACTION CREATORS + REDUCERS
// WIRING UP THE Store
const { createStore, combineReducers } = Redux;

// wiring the reducers for our store
const ourDepartments = combineReducers({
  policies: policies,
  claimsHistory: claimsHistory
});

// creating the store with the reducers (+ actions)
const store = createStore(ourDepartments);

// User functionality // how you change things in the store // or ==> WHEN YOU TAKE ACTION
store.dispatch(createPolicy("Mark", 100));
store.dispatch(createClaim("Ayesha", 500));
