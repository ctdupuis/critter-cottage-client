import axios from 'axios';
import url from 'url';

export const login = (userdata, history) => {
        return  async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.post(`${url}/login`, {
                email: userdata.email,
                password: userdata.password
            }, { withCredentials: true }
        )
        const resp = response.data
            if (resp.logged_in === true) {
                const user = resp.user
                const reqs = resp.requests
                dispatch({ type: 'LOGIN_USER', user })
                dispatch({ type: 'STORE_REQUESTS', reqs })
                history.push('/profile')
            } else {
                const err = resp.error
                dispatch({ type: 'LOGIN_ERROR', err })
                history.push('/profile')
            }
    }
}

export const signup = (userdata, history) => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.post(`${url}/signup`, {
            email: userdata.email,
            password: userdata.password,
            f_name: userdata.f_name,
            l_name: userdata.l_name
        }, { withCredentials: true }
        )
        const resp = response.data     
        if (resp.status === "created") {
            const user = resp.user
            dispatch({ type: 'LOGIN_USER', user })
            history.push('/profile')
        } else {
            const err = resp.errors           
            dispatch({ type: 'LOGIN_ERROR', err })
            history.push('/signup')
        }
    }
}

export const getLoginStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.get(`${url}/logged_in`, { withCredentials: true })
        const data = response.data
        if (data.logged_in === true ) {
            const user = data.user
            const reqs = data.requests
            dispatch({ type: 'LOGIN_USER', user })
            dispatch({ type: 'STORE_REQUESTS', reqs })
        }
    }
}

export const endSession = () => {
    return (dispatch) =>  {
        axios.get(`${url}/logout`, { withCredentials: true})
        .then(res => {
            dispatch({ type: 'LOGOUT_USER' })
            dispatch({ type: 'RESET_REQS' })
        })
    }
}
