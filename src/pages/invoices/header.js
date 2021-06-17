import {useState} from 'react'

import {
  Row,
  Col,
  Input,
  AutoComplete,
  Button,
  Space
} from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';

function getRandomInt(max, min=0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

function Header() {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <Row justify="space-between">
      <Col>
        <h2>All Invoices</h2>
      </Col>
      <Col>
        <Space size="small">
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
          >
            Add Invoices
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default Header
