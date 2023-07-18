# orders

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
      customerBankAccountNumber: "sapiente",
      customerBankCode: "quo",
      customerBankIfsc: "odit",
      customerEmail: "at",
      customerId: "at",
      customerPhone: "maiores",
    },
    orderAmount: 10.15,
    orderCurrency: "INR",
    orderExpiryTime: "2021-07-29T00:00:00Z",
    orderId: "molestiae",
    orderMeta: {
      notifyUrl: "quod",
      paymentMethods: "quod",
      returnUrl: "esse",
    },
    orderNote: "Test order",
    orderSplits: [
      {
        amount: 7805.29,
        percentage: 6788.8,
        vendorId: "dicta",
      },
      {
        amount: 7206.33,
        percentage: 6399.21,
        vendorId: "occaecati",
      },
      {
        amount: 1433.53,
        percentage: 5373.73,
        vendorId: "hic",
      },
    ],
    orderTags: {
      "totam": "beatae",
      "commodi": "molestiae",
      "modi": "qui",
      "impedit": "cum",
    },
    terminal: {
      terminalId: "esse",
      terminalPhoneNo: "ipsum",
      terminalType: "excepturi",
    },
  },
  xApiVersion: "aspernatur",
  xClientId: "perferendis",
  xClientSecret: "ad",
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
      emi: {
        cardAlias: "sed",
        cardBankName: CardEMICardBankName.Yes,
        cardCvv: "dolor",
        cardExpiryMm: "natus",
        cardExpiryYy: "laboriosam",
        cardHolderName: "hic",
        cardNumber: "saepe",
        channel: "fuga",
        emiTenure: 449950,
      },
    },
    paymentSessionId: "session__CvcEmNKDkmERQrxnx39ibhJ3Ii034pjc8ZVxf3qcgEXCWlgDDlHRgz2XYZCqpajDQSXMMtCusPgOIxYP2LZx0-05p39gC2Vgmq1RAj--gcn",
    saveInstrument: false,
  },
  xApiVersion: "corporis",
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

