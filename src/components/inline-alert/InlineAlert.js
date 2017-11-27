import React, { Component } from 'react';
import styles from './InlineAlert.css';
import GoStop from 'react-icons/lib/go/stop';

class InlineAlert extends Component {
  render() {
    const type = this.props.alertType;
    const content = this.props.alertContent;

    return (
      <div className={`${ this.props.classNames } ${ styles.InlineAlert }
        ${ type === 'error' &&
          styles.InlineAlertError
        }`
      }>
        { type === 'error' &&
          <GoStop className={ styles.InlineAlertIcon }/>
        }

        { content }
      </div>
    )
  }
}

export default InlineAlert;