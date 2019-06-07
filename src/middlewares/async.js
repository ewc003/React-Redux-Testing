// middleware boilerplate
// export default ({ dispatch }) => next => action => {
    // check to see if the action has a promise
    // on its 'payload' property and if it does,
    // then wait for it to resolve OT, send the
    // action on to the next middleware

    // we want to wait for the promise to resolve
    // (gets its data) then creates a new action
    // with that data and dispatches it
// }
export default ({ dispatch }) => next => action => {
    // debugger;
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};