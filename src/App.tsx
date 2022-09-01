import MainLayout from "layouts/MainLayout";
import MainRoutes from "router/MainRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {

  return (
    <MainLayout>
      <MainRoutes />
    </MainLayout>
  );
}

export default App;
