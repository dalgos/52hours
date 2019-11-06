import * as React from 'react'
import { render } from 'react-dom'

import App from 'container/App'

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
  render(
    <App />,
    root
  )
})
