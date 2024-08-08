module.exports = {
    '2023-11-15': {
        getQueries: (req_params) => {
            return Object.assign(req_params, {
                method: 'GET',
                api_path: '/dataKiosk/2023-11-15/queries',
                restore_rate: 0.0222
            });
        },
        createQuery: (req_params) => {
            return Object.assign(req_params, {
                method: 'POST',
                api_path: '/dataKiosk/2023-11-15/queries',
                restore_rate: 0.0167
            });
        },
        getQuery: (req_params) => {
            return Object.assign(req_params, {
                method: 'GET',
                api_path: `/dataKiosk/2023-11-15/queries/${req_params.queryId}`,
                restore_rate: 2.0
            });
        },
        cancelQuery: (req_params) => {
            return Object.assign(req_params, {
                method: 'DELETE',
                api_path: `/dataKiosk/2023-11-15/queries/${req_params.queryId}`,
                restore_rate: 0.0222
            });
        },
        getDocument: (req_params) => {
            return Object.assign(req_params, {
                method: 'GET',
                api_path: `/dataKiosk/2023-11-15/documents/${req_params.documentId}`,
                restore_rate: 0.0167
            });
        }
    }
};