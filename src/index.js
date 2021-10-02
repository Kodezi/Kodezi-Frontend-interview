import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppRouter from '../src/routes/AppRouter'
import 'antd/dist/antd.css'
import { UserProvider } from '../src/contexts/userContext'

ReactDOM.render(
  <Provider store={store}>
    <UserProvider>
      <AppRouter />
    </UserProvider>
  </Provider>,
  document.querySelector('#root')
)
