import * as React from 'react'

import '../styles/description.css'

interface Props {
  test: string
}
interface State {}
class PageDescription extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="description-container">
        <b className="page-title">{this.props.test}</b>
        <br />
        寿限無寿限無 五劫の擦り切れ 海砂利水魚の 水行末 雲来末 風来末
        <br />
        食う寝る処に 住む処 藪ら柑子の 藪柑子
        <br />
        パイポ パイポ パイポの シューリンガン
        <br />
        シューリンガンの グーリンダイ
        <br />
        グーリンダイの ポンポコピーの ポンポコナの
        <br />
        長久命の 長助
      </div>
    )
  }
}

export default PageDescription
