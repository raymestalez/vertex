const INITIAL_STATE = {
    subscribed: false
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
	case 'CREATE_SUBSCRIBER':
	    return {...state, subscribed: true };
	case 'SUBSCRIBED_CLOSE':
	    return {...state, subscribed: false };
	default:
	    return state;
    }
}
