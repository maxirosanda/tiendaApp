import MainNavigator from "./navigation/MainNavigator"
import  { store }  from './app/store'
import { Provider } from 'react-redux'


const App = () => {
  return    <Provider store={store}>
               <MainNavigator/>
            </Provider>
  
}

export default App
