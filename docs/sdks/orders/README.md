# Orders

### Available Operations

* [createOrder](#createorder) - Create Order
* [orderPay](#orderpay) - Order Pay

## createOrder

Use this API to create orders with Cashfree from your backend and get the payment link. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information email us at "care@cashfree.com".

### Example Usage

```typescript
import { Pg } from "PG";
import { CreateOrderResponse } from "PG/dist/sdk/models/operations";

const sdk = new Pg();

sdk.orders.createOrder({
  createOrderBackendRequest: {
    customerDetails: {
      customerBankAccountNumber: "placeat",
      customerBankCode: "voluptatum",
      customerBankIfsc: "iusto",
      customerEmail: "excepturi",
      customerId: "nisi",
      customerPhone: "recusandae",
    },
    orderAmount: 10.15,
    orderCurrency: "INR",
    orderExpiryTime: "2021-07-29T00:00:00Z",
    orderId: "temporibus",
    orderMeta: {
      notifyUrl: "ab",
      paymentMethods: "quis",
      returnUrl: "veritatis",
    },
    orderNote: "Test order",
    orderSplits: [
      {
        amount: 6481.72,
        percentage: 202.18,
        vendorId: "ipsam",
      },
    ],
    orderTags: {
      "repellendus": "sapiente",
    },
    terminal: {
      terminalId: "quo",
      terminalPhoneNo: "odit",
      terminalType: "at",
    },
  },
  xApiVersion: "at",
  xClientId: "maiores",
  xClientSecret: "molestiae",
}).then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.CreateOrderRequest](../../models/operations/createorderrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateOrderResponse](../../models/operations/createorderresponse.md)>**


## orderPay

Use this API when you have already created the orders and want Cashfree to process the payment. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information send an email to "care@cashfree.com".

### Example Usage

```typescript
import { Pg } from "PG";
import { OrderPayResponse } from "PG/dist/sdk/models/operations";
import {
  AppProvider,
  CardCardBankName,
  CardChannel,
  CardEMICardBankName,
  CardlessEMIProvider,
  PaylaterProvider,
  UpiChannel,
} from "PG/dist/sdk/models/shared";

const sdk = new Pg();

sdk.orders.orderPay({
  orderPayRequest: {
    offerId: "faa6cc05-d1e2-401c-b0cf-0c9db3ff0f0b",
    paymentMethod: {
      cardlessEmi: {
        channel: "quod",
        emiTenure: 461479,
        phone: "861-765-1597 x5144",
        provider: CardlessEMIProvider.Zestmoney,
      },
    },
    paymentSessionId: "session__CvcEmNKDkmERQrxnx39ibhJ3Ii034pjc8ZVxf3qcgEXCWlgDDlHRgz2XYZCqpajDQSXMMtCusPgOIxYP2LZx0-05p39gC2Vgmq1RAj--gcn",
    saveInstrument: false,
  },
  xApiVersion: "qui",
}).then((res: OrderPayResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.OrderPayRequest](../../models/operations/orderpayrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.OrderPayResponse](../../models/operations/orderpayresponse.md)>**

