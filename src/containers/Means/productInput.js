//产品方案选择框组件
import { Form, Input, Button, Select, Row, Col } from 'antd';
import React from 'react';
import { observer } from 'mobx-react';
import './meansTable.css';
import MeansInfo from 'models/MeansInfo';
import MeanShow from "./MeanShow";

const FormItem = Form.Item;
const Option = Select.Option;
@observer
class Means extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    MeansInfo.getProduct("http://qolm.ybyt.cc/api/v1/product/product_list");
  }
  handleChange(value, option) {
    MeansInfo.getProInfo(`http://qolm.ybyt.cc/api/v1/product/product_usage_list?product_id=${option.props.dataId}`);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err && values.count) {
        console.log(values);
        MeansInfo.getKaifang(values);
        this.props.form.resetFields();
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const proArrOptions = MeansInfo.proArr.map(p => <Option key={p.id} dataId={p.id} value={p.name} style={{width: "100%"}}>{p.name}</Option>);
    const proUse = MeansInfo.proUse[0];
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={4}>
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: false, message: 'Please input your note!' }],
              })(
              <Select
                showSearch
                placeholder="请选择方案"
                optionFilterProp="children"
                onSelect={this.handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {proArrOptions}
              </Select>
              )}
            </FormItem>
          </Col>
          <Col span={4} style={{marginLeft: "5px"}}>
            <FormItem>
              {getFieldDecorator('identifier', {
                rules: [{ required: false, message: '' }],
                initialValue: `${proUse.product.code}`,
              })(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={11} style={{marginLeft: "5px"}}>
            <FormItem>
              {getFieldDecorator('usage', {
                rules: [{ required: false, message: '' }],
                initialValue: `${proUse.usage}`,
              })(
                <Input />
              )}
            </FormItem>
           
          </Col>
          <Col span={2} style={{marginLeft: "5px"}}>
            <FormItem>
              {getFieldDecorator('count', {
                rules: [{ required: false, message: '' }],
              })(
                <Input placeholder="数量" />
              )}
            </FormItem>
            
          </Col>
          <Col span={2} style={{marginLeft: "5px", float: "right"}}>
          <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>添加</Button>
          </FormItem>
            
          </Col>
        </Row>
        <MeanShow />
      </Form>
      </div>
    );
  }
}

export default Form.create()(Means);