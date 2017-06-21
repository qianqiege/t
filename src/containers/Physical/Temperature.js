import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import AddRecord from "./AddRecord";
import PhysicalInfo from "./PhysicalInfo";

import "../style.scss";



class Temperature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "体温测量",
			phyName: "体温",
			unit: "度(℃)",
		}
	}
	render() {
		return <div className="record-content">
			<PhysicalInfo store={this.state} />
		</div>
	}
}

export default Temperature;