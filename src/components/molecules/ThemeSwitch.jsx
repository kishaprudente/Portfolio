import React, { Component } from 'react'
import { ReactComponent as Day } from '../../images/day.svg'
import { ReactComponent as Night } from '../../images/night.svg'
import './ThemeSwitch.scss'

class ThemeSwitch extends Component {
  constructor(props) {
    super(props)

    this.state = { dark: false }
  }

  componentDidMount() {
    const now = new Date().getHours()

    if (now >= 19 || now <= 7) {
      this.setState({ dark: true })
    }

    this.toggleTheme()
  }

  componentDidUpdate() {
    this.toggleTheme()
  }

  isDark = () => this.state.dark === true

  handleChange = () => {
    this.setState({ dark: !this.isDark() })
  }

  toggleTheme = () => {
    document.body.classList.toggle('dark', this.state.dark)
  }

  render() {
    return (
      <aside className="themeswitch">
        <label className="checkbox">
          <span className="checkbox__label">Toggle Night Mode</span>
          <input
            onChange={this.handleChange}
            type="checkbox"
            name="toggle"
            value="toggle"
            aria-describedby="toggle"
            checked={this.state.dark}
          />
          <span
            id="toggle"
            className="checkbox__faux-container"
            aria-live="assertive"
          >
            <Day className={this.state.dark ? 'icon' : 'icon active'} />
            <span className="checkbox__faux" />
            <Night className={this.state.dark ? 'icon active' : 'icon'} />
          </span>
        </label>
      </aside>
    )
  }
}

export default ThemeSwitch
