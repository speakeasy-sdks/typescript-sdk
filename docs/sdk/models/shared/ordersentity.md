# OrdersEntity


## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `cfOrderId`                                                                                                                           | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `customerDetails`                                                                                                                     | [shared.CustomerDetails](../../../sdk/models/shared/customerdetails.md)                                                               | :heavy_minus_sign:                                                                                                                    | The customer details that are necessary. Note that you can pass dummy details if your use case does not require the customer details. |
| `entity`                                                                                                                              | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `orderAmount`                                                                                                                         | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `orderCurrency`                                                                                                                       | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `orderExpiryTime`                                                                                                                     | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `orderId`                                                                                                                             | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `orderMeta`                                                                                                                           | [shared.OrderMeta](../../../sdk/models/shared/ordermeta.md)                                                                           | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `orderNote`                                                                                                                           | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `orderStatus`                                                                                                                         | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `paymentSessionId`                                                                                                                    | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `payments`                                                                                                                            | [shared.PaymentURLObject](../../../sdk/models/shared/paymenturlobject.md)                                                             | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `refunds`                                                                                                                             | [shared.RefundURLObject](../../../sdk/models/shared/refundurlobject.md)                                                               | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `settlements`                                                                                                                         | [shared.SettlementURLObject](../../../sdk/models/shared/settlementurlobject.md)                                                       | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |