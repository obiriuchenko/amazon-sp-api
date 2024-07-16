const utils = require('../../../utils');

module.exports = {
    'v2024-03-20':{
        listInboundPlans:(req_params) => {
            return Object.assign(req_params, {
                method:'GET',
                api_path:'/inbound/fba/2024-03-20/inboundPlans',
                restore_rate:0.5
            });
        },
        getInboundPlan:(req_params) => {
            return Object.assign(req_params, {
                method:'GET',
                api_path:'/inbound/fba/2024-03-20/inboundPlans/' + req_params.path.inboundPlanId,
                restore_rate:0.5
            });
        },
        getShipment:(req_params) => {
            return Object.assign(req_params, {
                method:'GET',
                api_path:'/inbound/fba/2024-03-20/inboundPlans/' + req_params.path.inboundPlanId + '/shipments/' + req_params.path.shipmentId,
                restore_rate:0.5
            });
        },
        listShipmentItems:(req_params) => {
            return Object.assign(req_params, {
                method:'GET',
                api_path:'/inbound/fba/2024-03-20/inboundPlans/' + req_params.path.inboundPlanId + '/shipments/' + req_params.path.shipmentId + '/items',
                restore_rate:0.5
            });
        },
    }
};