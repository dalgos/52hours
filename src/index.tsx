import * as React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from 'container/App'

// import 'scss'

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#app')
  )
}

window.addEventListener('DOMContentLoaded', () => {
  render(App)
})
