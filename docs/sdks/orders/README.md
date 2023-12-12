# Orders
(*orders*)

### Available Operations

* [createOrder](#createorder) - Create Order
* [orderPay](#orderpay) - Order Pay

## createOrder

Use this API to create orders with Cashfree from your backend and get the payment link. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information email us at "care@cashfree.com".

### Example Usage

```typescript
import { Pg } from "PG";

async function run() {
  const sdk = new Pg();

  const res = await sdk.orders.createOrder({
    createOrderBackendRequest: {
      customerDetails: {
        customerId: "string",
        customerPhone: "string",
      },
      orderAmount: 10.15,
      orderCurrency: "INR",
      orderExpiryTime: "2021-07-29T00:00:00Z",
      orderMeta: {},
      orderNote: "Test order",
      orderSplits: [
        {},
      ],
      orderTags: {
        "key": "string",
      },
      terminal: {
        terminalId: "string",
        terminalPhoneNo: "string",
        terminalType: "string",
      },
    },
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateOrderRequest](../../sdk/models/operations/createorderrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateOrderResponse](../../sdk/models/operations/createorderresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## orderPay

Use this API when you have already created the orders and want Cashfree to process the payment. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information send an email to "care@cashfree.com".

### Example Usage

```typescript
import { Pg } from "PG";

async function run() {
  const sdk = new Pg();

  const res = await sdk.orders.orderPay({
    orderPayRequest: {
      offerId: "faa6cc05-d1e2-401c-b0cf-0c9db3ff0f0b",
      paymentMethod: "string",
      paymentSessionId: "session__CvcEmNKDkmERQrxnx39ibhJ3Ii034pjc8ZVxf3qcgEXCWlgDDlHRgz2XYZCqpajDQSXMMtCusPgOIxYP2LZx0-05p39gC2Vgmq1RAj--gcn",
    },
    xApiVersion: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.OrderPayRequest](../../sdk/models/operations/orderpayrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.OrderPayResponse](../../sdk/models/operations/orderpayresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
