module.exports = {
    '2024-05-09': {
        listInventory: (req_params) => {
            return Object.assign(req_params, {
                method: 'GET',
                api_path: '/awd/2024-05-09/inventory',
                restore_rate: 2,
            });
        },
    }
};