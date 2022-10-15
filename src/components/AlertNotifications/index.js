// Write your code here
// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const NotificationsData = [
  {
    Icon: <AiFillCheckCircle />,
    Heading: 'Success',
    Description: 'You can access all the files in the folder',
    id: uuidv4(),
  },
  {
    Icon: <RiErrorWarningFill />,
    Heading: 'Error',
    Description:
      'Sorry, you are not authorized to have access to delete the file',
    id: uuidv4(),
  },
  {
    Icon: <MdWarning />,
    Heading: 'Warning',
    Description: 'Viewers of this file can see comments and suggestions',
    id: uuidv4(),
  },
  {
    Icon: <MdInfo />,
    Heading: 'Info',
    Description: 'Anyone on the internet can view these files',
    id: uuidv4(),
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div>
        <h1>Alert Notifications</h1>

        {NotificationsData.map(eachNotification => (
          <ul key={eachNotification.id}>
            <Notification>{eachNotification}</Notification>
          </ul>
        ))}
      </div>
    )
  }
}
export default AlertNotifications
