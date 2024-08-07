module.exports = {
   fulfillmentInbound:{
    __versions:[
      'v0',
        'v2024-03-20',
    ],
    __operations:[
        // v0
      'getInboundGuidance',
      'createInboundShipmentPlan',
      'updateInboundShipment',
      'createInboundShipment',
      'getPreorderInfo',
      'confirmPreorder',
      'getPrepInstructions',
      'getTransportDetails',
      'putTransportDetails',
      'voidTransport',
      'estimateTransport',
      'confirmTransport',
      'getLabels',
      'getBillOfLading',
      'getShipments',
      'getShipmentItemsByShipmentId',
      'getShipmentItems',
        //v2024-03-20
        'listInboundPlans',
        'getInboundPlan',
        'getShipment',
        'listShipmentItems',
    ],
    ...require('./versions/fulfillment_inbound/fulfillmentInbound_v0'),
    ...require('./versions/fulfillment_inbound/fulfillmentInbound_v2024-03-20'),
  }
};