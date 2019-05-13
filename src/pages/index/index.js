import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  addItem () {
    let { list } = this.state
    const inputVal = this.inputVal
    this.inputVal = ''
    // 如果输入框的值为空，则返回，否则添加到事项列表里
    if (inputVal == '') return
    else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }

  // 输入框 onInput 的时候，它的值暂存起来
  inputHandler (e) {
    this.inputVal = e.target.value
  }

  // 删除
  delItem (index) {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      // 创建一个初始的 Todolist
      list: [
        'get up',
        'coding',
        'sleep',
      ],
      inputVal: ''
    }
  }

  render () {
    let { list, inputVal } = this.state
    return (
      <View className='index'>
        <View className='top'>
          <Input className='input' value={inputVal} onInput={this.inputHandler.bind(this)} />
          <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        </View>
        <View className='list_wrap'>
          {
            list.map((item, index) => {
              return <View key={item}>
                <Text>{index + 1}.{item}</Text>
                <Text onClick={this.delItem.bind(this, index)} className='del-btn'>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
