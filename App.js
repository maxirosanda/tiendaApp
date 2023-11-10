import BreadNavigator from "./navigation/BreadNavigator"
import  { store }  from './app/store'
import { Provider } from 'react-redux'


const App = () => {
  return    <Provider store={store}>
               <BreadNavigator/>
            </Provider>
  
}

export default App
