import {DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION} from './types'

export const setDisabledBalanceOnAdd = () => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    let { disableBalanceOnAdd } = settings;

    disableBalanceOnAdd = !disableBalanceOnAdd;

    localStorage.setItem('settings', JSON.stringify(settings));

    return {
        type: DISABLE_BALANCE_ON_ADD,
        payload: disableBalanceOnAdd
    }
}

export const setDisabledBalanceOnEdit = () => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    let { disabledBalanceOnEdit } = settings;

    disabledBalanceOnEdit = !disabledBalanceOnEdit;

    localStorage.setItem('settings', JSON.stringify(settings));
    return {
        type: DISABLE_BALANCE_ON_EDIT,
        payload: disabledBalanceOnEdit
    }
}

export const setAllowRegistration = () => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    let { allowRegistration } = settings;

    allowRegistration = !allowRegistration;

    localStorage.setItem('settings', JSON.stringify(settings));
    return {
        type: ALLOW_REGISTRATION,
        payload: allowRegistration
    }
}
