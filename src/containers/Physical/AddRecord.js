import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import { observer } from "mobx-react";
import PhysicalData from "models/PhysicalData";
import ".././style.scss";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

@observer
class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
 
  handleChange(e) {
    console.log(e.target.value);
    const { name, phone, sex } = PhysicalData.userInfo;
    if( e.target.value.length == 18 ) {
      PhysicalData.checkUser(`http://qolm.ybyt.cc/api/v1/patient/get_by_id_number?id_number=${e.target.value}`);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { name, phone, sex } = PhysicalData.userInfo;
    return (
      <div>
        <h3 style={{paddingLeft: 80, marginBottom: 10}}>添加新记录</h3>
        <Form onSubmit={this.handleSubmit} className="login-form record-block">
          <Row>
            <Col span={10} style={{float: 'left'}}>

                  <Input onChange={ this.handleChange.bind(this) } className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>身份证号</span>} placeholder="" />
  
              <FormItem>
                {getFieldDecorator('name', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: `${name}`,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>姓 名</span>} placeholder="" disabled/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('phone', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: `${phone}`,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>手机号</span>} placeholder="" disabled/>
                )}
              </FormItem>
            </Col>
            <Col span={10} style={{ float: 'right', fontSize: 16 }}>
              <div className="mar-b mar-t">
                <p>性别</p>
                  <RadioGroup value={sex} disabled>
                    <Radio value={"男"}>男</Radio>
                    <Radio value={"女"}>女</Radio>
                  </RadioGroup>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      
    );
  }
}

export default Form.create()(NormalLoginForm);