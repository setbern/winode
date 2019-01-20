const initialState = {
  pinOverlay: false,
  home: false,
  dashboard: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
   	case TOGGLE_PIN_OVERLAY:
   		return {
   			...state,
   			pinOverlay: action.status
   		}
      case TOGGLE_HOME_PAGE:
        return {
          ...state,
          home: action.status
        }
        case TOGGLE_DASHBOARD_PAGE:
          return {
            ...state,
            dashboard: action.status
          }
    default:
     	return state;
  	}
}


export function togglePinOverlay(status) {
	return {
		type: TOGGLE_PIN_OVERLAY,
		status
	}
}

export function toggleHomePage(status) {
  return {
    type: TOGGLE_HOME_PAGE,
    status
  }
}
export function toggleDashboard(status) {
  return {
    type: TOGGLE_DASHBOARD_PAGE,
    status
  }
}


const TOGGLE_PIN_OVERLAY = 'TOGGLE_PIN_OVERLAY'
const TOGGLE_HOME_PAGE = 'TOGGLE_HOME_PAGE'
const TOGGLE_DASHBOARD_PAGE = 'TOGGLE_DASHBOARD_PAGE'