// INFO JS OBJECT EXTEND
// https://stackoverflow.com/questions/10430279/extending-an-object-in-javascript


// style
import './style/App.sass';

// reat router
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// fontes
import './fontes/furoral/stylesheet.css'
import './fontes/quintessential/stylesheet.css'
import './fontes/bluu/stylesheet.css'

// components
import { Base } from './component/Base';
import { Home } from './component/pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Base />}>
      <Route path="/" element={<Home/>}/>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
