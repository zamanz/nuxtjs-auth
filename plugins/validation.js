export default ({ app }, inject) => {
    inject("validationError", (response, array = false) => {
        let message = [];
        switch (response.status) {
            case 401:
                message.push(response.data);
                break;
            case 422:
                Object.keys(response.data.errors).forEach((item, index) => {
                    let error = {};
                    error[item] = response.data.errors[item][0];
                    message.push(error);
                });
                break;
            case 404:
                message.push(response.data);
                break;
            default:
                message.push({
                    message: "Something went wrong!"
                });
                break;
        }
        //console.log('Error Message', message);
        return array ? message.map(Object.values).map(item => item[0]) : message;
    });
};
