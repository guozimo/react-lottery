import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes  from 'prop-types'
import { Select } from 'antd'

import './style.css'

const Option = Select.Option

@inject('store')
@observer
class SetAward extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  handleChange = value => {
    this.props.store.selectAward(value)
  }

  render() {
    const store = this.props.store
    return (
      <div>
        <span className="item-desc">抽取奖项</span>
        <Select 
          className="item-select" 
          placeholder="请先设置奖项"
          onChange={this.handleChange}>
          {
            store.awardsList && store.awardsList.map(a => <Option value={a.id} key={a.id}>{a.title}</Option>)
          }
        </Select>
        {this.props.store.currentAward && this.props.store.currentAward.title}
      </div>
    )
  }
}

export default SetAward
