import React from 'react';
import Alert from '@material-ui/lab/Alert'

const Alerts = (props) => {

    return (
        <div>
            { props.isAlertVisible === true ? (
                <Alert severity={props.severity}>This is an {props.severity} alert — check it out! </Alert>
            ) : null }
        </div>
    );
}

export default Alerts;