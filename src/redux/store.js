import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { common } from './reducers/index'



let store = createStore(
  common,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store