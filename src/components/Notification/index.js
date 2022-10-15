// Write your code here
import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'

class Notification extends Component {
  render() {
    const {children} = this.props
    const {Heading, Description, Icon} = children
    return (
      <li>
        {Icon}
        <div>
          <h1>{Heading}</h1>
          <p>{Description}</p>
        </div>

        <GrFormClose />
      </li>
    )
  }
}

export default Notification
