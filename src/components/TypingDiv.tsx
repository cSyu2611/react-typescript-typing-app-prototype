// libraries
import React, { Component } from 'react'

// css
import '../styles/typing.css'

interface Props {}

interface State {
  typingArr: Array<string>
  currentIdx: number
  typo: Boolean
  typoCount: number
  startFlag: Boolean
  endFlag: Boolean
  time: number
}

class TypingDiv extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      // 今後ランダムな単語の配列からタイピング文を作りたいので，配列にしている．
      typingArr: [
        'jugemu',
        'jugemu',
        'gokounosurikire',
        'kaijarisuigyono',
        'suigyoumatsu',
        'fuuraimatsu',
        'unraimatsu',
        'kuunerutokoroni',
        'sumutokoro',
        'yaburakoujino',
        'burakouji',
        'paipo',
        'paipo',
        'paipono',
        'shu-ringann',
        'shu-ringannno',
        'gu-rindai',
        'gu-rindaino',
        'ponpokopi-no',
        'ponpokonano',
        'choukyuumeino',
        'chousuke',
      ],
      currentIdx: 0,
      typo: false,
      typoCount: 0,
      startFlag: false,
      endFlag: false,
      time: 0,
    }
  }

  // タイマーref
  // typescriptで
  // <div ref={(ref)=>this.timer = ref} />的なことがしたかったけどめんどくさそう？
  private timer: any = null

  _onKeyDown = (e: any) => {
    // first call
    if (!this.state.startFlag) {
      this.setState({
        startFlag: true, // 開始フラグ true
      })
      const start = new Date().getTime()
      // タイマーセット
      this.timer = setInterval(() => {
        this.setState({
          time: new Date().getTime() - start,
        })
      }, 10)
    }

    // 終了判定が入るまで
    if (!this.state.endFlag) {
      // 押されたキーと現在の文字が一致したら
      if (e.key === this.state.typingArr.join(' ')[this.state.currentIdx]) {
        this.setState({
          typo: false, // タイポ false
          currentIdx: this.state.currentIdx + 1, // 次のidxへ
        })
      }
      // タイポしたら
      else {
        this.setState({
          typo: true, // タイポ true
          typoCount: this.state.typoCount + 1, // タイポ回数 + 1
        })
      }

      // 最終文字の入力が終了したら
      if (this.state.currentIdx + 1 >= this.state.typingArr.join(' ').length) {
        this.setState({
          endFlag: true, // 終了フラグ true
        })
        clearInterval(this.timer) // タイマー停止
      }
    }
  }

  // リセットボタンクリック時
  _onResetClick = () => {
    // state リセット
    this.setState({
      currentIdx: 0,
      typo: false,
      typoCount: 0,
      startFlag: false,
      endFlag: false,
      time: 0,
    })
    // タイマー停止
    clearInterval(this.timer)
  }

  render() {
    return (
      <>
        <div
          className="typing-div"
          id="typing"
          onKeyDown={(e) => this._onKeyDown(e)}
          tabIndex={0}
        >
          {/* 文字列先頭から現在の文字手前まで */}
          <span className="done-font">
            {this.state.typingArr.join(' ').slice(0, this.state.currentIdx)}
          </span>

          {/* 現在の文字 */}
          <span
            className={this.state.typo ? 'current-font-typo' : 'current-font'}
          >
            {this.state.typingArr.join(' ')[this.state.currentIdx]}
          </span>

          {/* 現在の文字以降の文字列 */}
          <span className="yet-font">
            {this.state.typingArr
              .join(' ')
              .slice(
                this.state.currentIdx + 1,
                this.state.typingArr.join(' ').length,
              )}
          </span>
        </div>

        {/* 結果ブロック */}
        <div className="result-container">
          <button onClick={() => this._onResetClick()}>リセット</button>
          <ul>
            <div>タイポ回数：{this.state.typoCount}</div>
            <div>タイム：{this.state.time / 1000}</div>
          </ul>
        </div>
      </>
    )
  }
}

export default TypingDiv
