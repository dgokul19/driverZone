import _ from 'underscore';

export const validateDetails = (formDetails = {}) => {
    const { username, phone, fromLocation, toLocation, pickUpDate, pickUpTime } = formDetails;
    const valid = {
        status: false,
        msg: ''
    };
    if (_.isEmpty(username)) {
        valid.msg = 'Please enter a valid username';
    } else if (_.isEmpty(phone)) {
        valid.msg = 'Please enter a valid phone';
    } else if (_.isEmpty(fromLocation)) {
        valid.msg = 'Please enter a source location';
    } else if (_.isEmpty(toLocation)) {
        valid.msg = 'Please enter a destination location';
    } else if (_.isEmpty(pickUpDate)) {
        valid.msg = 'Please enter a pickup date';
    } else if (_.isEmpty(pickUpTime)) {
        valid.msg = 'Please enter a pickup time';
    } else {
        valid.status = true;
    }
    return valid;
};