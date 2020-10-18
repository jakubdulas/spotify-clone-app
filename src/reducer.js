export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQDknn72kmQiCrFQDONPX15OisOUUYdCbQb9L529Nx1t1y9AJMCxPWILBREWT7usxXnpt_aua9bPrfHVpt5yhLAxEzATyCxgmgsQdKqeAXSTEcgFhvzUOAZrF',
}

const reducer = (state, action) => {

    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state
    }
}

export default reducer