import AdminApplication from "./components/Admin/AdminApplication/Application";
import UserProvider from "./context/UserProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <UserProvider>
    <AdminApplication />
    </UserProvider>
  );
};

export default App;
