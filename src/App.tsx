import MainLayout from "layouts/MainLayout";
import MainRoutes from "router/MainRoutes";
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
