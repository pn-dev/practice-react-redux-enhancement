
import React from 'react'
import { createStore } from 'redux'
import gitHubReducer from './github.reductor'
import { Provider } from 'react-redux'
import GitHubComponent from './github'

const store = createStore(gitHubReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  


const GitHub = () => {

    return (
        <Provider store={ store } >
            <GitHubComponent/>
        </Provider>
    )
}

export default GitHub