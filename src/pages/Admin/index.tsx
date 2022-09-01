import GridExample from './components/CustomTable'
import { Toast, ToastHeader, ToastBody } from 'reactstrap'
const Admin = () => {
  return (
    <div className="h-100">
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h1>Admin Page</h1>
        <h3>Welcome, admin</h3>
      </div>
      <div
        style={{ height: 1, width: '100%', backgroundColor: '#0d6efd' }}
      ></div>
      <div className="d-flex h-100 mt-5">
        <div style={{ width: '15%' }} className="border-end">
          <h2 className="text-primary">Order</h2>
        </div>
        <div style={{ width: '85%' }} className="h-100 d-flex align-items-center relative">
          <div className="w-100 h-50 ml-5">
            <div className='absolute right-0 top-0'>
            <Toast isOpen={true}>
              <ToastHeader icon='success' toggle={function noRefCheck() {}}>
                New ORDER!
              </ToastHeader>
              <ToastBody>Customer has place new order</ToastBody>
            </Toast>
            </div>
            <GridExample />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Admin
