module.exports = {
  orders: {
    __versions: ['v0'],
    __operations: [
      'getOrders',
      'getOrder',
      'getOrderBuyerInfo',
      'getOrderAddress',
      'getOrderItems',
      'getOrderItemsBuyerInfo',
      'updateShipmentStatus',
      'getOrderRegulatedInfo',
      'updateVerificationStatus',
      'confirmShipment'
    ],
    ...require('./versions/orders/orders_v0')
  }
};
