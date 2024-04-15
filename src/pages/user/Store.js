import { createStore, combineReducers } from 'redux';

// Retrieve screenSwitchCount from localStorage, if available
// localStorage.removeItem('screenSwitchCount');
const localStorageScreenSwitchCount = localStorage.getItem('screenSwitchCount');

const initialState = {
 screenSwitchCount: localStorageScreenSwitchCount ? parseInt(localStorageScreenSwitchCount, 10) : 0,
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
 case 'INCREMENT_SCREEN_SWITCH':
 const updatedCount = state.screenSwitchCount + 1;
 // Store the updated count in localStorage
 localStorage.setItem('screenSwitchCount', updatedCount);
 return {
 screenSwitchCount: updatedCount,
 };
 default:
 return state;
 }
};

const rootReducer = combineReducers({
 yourReducerName: reducer,
});

// Create and export the Redux store
const store = createStore(rootReducer);

export default store;