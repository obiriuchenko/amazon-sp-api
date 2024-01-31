module.exports = {
    '2023-11-15':{
        getQueries:(req_params) => {
            return Object.assign(req_params, {
                method:'GET',
                api_path:'/dataKiosk/2023-11-15/queries',
                restore_rate:0.0222
            });
        },
    }
};