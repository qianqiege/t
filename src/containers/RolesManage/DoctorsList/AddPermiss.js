// 健康管理师页面 的添加权限组件
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Modal, Button, Input} from 'antd';
import { observer } from 'mobx-react';
import '../CustomTable.scss';
@observer
class AddRole extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render() {
    const CheckboxGroup = Checkbox.Group;
    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    }

    const options = [
    { label: 'test3', value: 'test3' },
    { label: 'test2', value: 'test2' },
    { label: '村卫生室', value: '村卫生室' },
    { label: '工作站管理员', value: '工作站管理员' },
    { label: '健康管理师列表', value: '健康管理师列表' },
    { label: '档案室', value: '档案室' },
    { label: '管理师', value: '管理师' },
    { label: '管理员', value: '管理员' },
  ];

    return (
      <div>
        <Button className='addrole' type="primary" style={{height:35}} onClick={this.showModal}>添加权限</Button>
        <Modal
          title="添加用户权限"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className='addrole'
        >
    
        <br/>
        <br />
        <p className='choose'>用户名</p>
        <br/>
        <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} className='Checkbox'/>
        <br />

        
        <br/>
   
        <br/>
        </Modal>
      </div>
    );
  }
}
export default AddRole;