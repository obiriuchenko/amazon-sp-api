module.exports = {
    authorization:{
        __versions:[
            '2024-04-01'
        ],
        __operations:[
            'CreateNotification',
            'DeleteNotifications',
            'RecordActionFeedback',
        ],
        ...require('./versions/appIntegrations/appIntegrations-2024-04-01')
    }
};