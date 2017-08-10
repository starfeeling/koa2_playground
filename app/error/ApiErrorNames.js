let ApiErrorNames = {};

ApiErrorNames.UNKNOW_ERROR = "unknowError";
ApiErrorNames.USER_NOT_EXIST = "userNotExist";

const error_map = new Map();

error_map.set(ApiErrorNames.UNKNOW_ERROR, { code: -1, message: 'unknow error' });
error_map.set(ApiErrorNames.USER_NOT_EXIST, { code: 101, message: 'user not exist' });

ApiErrorNames.getErrorInfo = (error_name) => {

    let error_info;

    if (error_name) {
        error_info = error_map.get(error_name);
    }


    if (!error_info) {
        error_name = UNKNOW_ERROR;
        error_info = error_map.get(error_name);
    }

    return error_info;
}

module.exports = ApiErrorNames;