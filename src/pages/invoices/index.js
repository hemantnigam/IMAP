import {
  Button,
  Card
} from 'antd';
import {
  ExportOutlined
} from '@ant-design/icons';
import Header from './header';
import './styles.scss';



function Invoices() {

  return (
    <>
      <div className="invoices">
        <Header/>
        <Card
          className="invoices-content"
          title="Invoices List"
          extra={
            <Button
              type="primary"
              icon={<ExportOutlined />}
            >
              Export
            </Button>
          }
        >
          Body
        </Card>
      </div>
    </>
  )
}

export default Invoices
