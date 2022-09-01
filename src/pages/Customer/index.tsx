import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import ColorSelect from './components/ColorSelect';

const Customer = () => {
  const [data, setData] = useState<any>([{}]);
  const pageSize = 8;
  const [pagesCount, setPageCount] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(0);
  // useEffect(() => {
  //   fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
  //       .then((resp) => resp.json())
  //       .then((data: any) => {
  //           setPageCount(data.length/pageSize);
  //       });
  // }, [])
  const handleClickPage = (e: any, index: any) => {
    e.preventDefault();
    setCurrentPage(index);
  }
  const renderProduct = () => {
    return (
      <div>
        {data.map((item: any) => (
          <Card
            style={{
              width: '18rem',
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Iphone X
              </CardSubtitle>
              <ColorSelect data={["#2ecc71", "#3498db", "#f1c40f", "#e74c3c"]}/>
              <CardTitle tag="h3">From RM 979</CardTitle>
              <Button className='w-100' color="primary">Place Order</Button>
            </CardBody>
          </Card>
        ))}
        <div className='absolute right-0 bottom-0'>
          <Pagination  aria-label="Page navigation example" size="sm">
            <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" previous />
            </PaginationItem>
            {[...Array(pagesCount)].map((page, i) => <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => handleClickPage(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>)}
            <PaginationItem>
              <PaginationLink href="#" next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" last />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    )
  }
  const renderFilter = () => {
    return (
      <div className="p-3">
        <Form>
          <FormGroup>
            <Label for="productId">Product Name</Label>
            <Input id="productId" name="productName" />
          </FormGroup>
          <FormGroup>
            <Label for="categoryId">Category</Label>
            <Input id="categoryId" name="category" />
          </FormGroup>
          <FormGroup>
            <Label for="brandId">Brand</Label>
            <Input id="brandId" name="brand" />
            <div className="text-center mt-4">
              <Button color="primary" className="w-100">
                Search
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    )
  }
  return (
    <div className="h-100">
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h1>Customer Page</h1>
        <h3>Welcome, Customer</h3>
      </div>
      <div
        style={{ height: 1, width: '100%', backgroundColor: '#0d6efd' }}
      ></div>
      <div className="d-flex h-100 mt-5">
        <div style={{ width: '20%' }} className="border-end">
          <h5 className="text-primary text-center">Search Filter</h5>
          {renderFilter()}
        </div>
        <div
          style={{ width: '80%' }}
          className="h-100 d-flex align-items-center relative"
        >
          <div className="w-100 h-100 ml-5">{renderProduct()}</div>
        </div>
      </div>
    </div>
  )
}
export default Customer
