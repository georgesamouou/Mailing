import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Page/Dashboard';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@coreui/coreui/dist/css/coreui.min.css'
import Login from './Page/Login';
import CEForm from './Page/CEForm';

function App() {
  return (
    <div>
      {/*<Dashboard/>*/}
      {/*<Login/>*/}
      <CEForm/>
    </div>
  );
}

export default App;
