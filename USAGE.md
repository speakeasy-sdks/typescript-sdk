<!-- Start SDK Example Usage -->


```typescript
import { Pg } from "PG";
import { CreateOrderResponse } from "PG/dist/sdk/models/operations";

const sdk = new Pg();

sdk.orders.createOrder({
  createOrderBackendRequest: {
    customerDetails: {
      customerBankAccountNumber: "corrupti",
      customerBankCode: "provident",
      customerBankIfsc: "distinctio",
      customerEmail: "quibusdam",
      customerId: "unde",
      customerPhone: "nulla",
    },
    orderAmount: 10.15,
    orderCurrency: "INR",
    orderExpiryTime: "2021-07-29T00:00:00Z",
    orderId: "corrupti",
    orderMeta: {
      notifyUrl: "illum",
      paymentMethods: "vel",
      returnUrl: "error",
    },
    orderNote: "Test order",
    orderSplits: [
      {
        amount: 6458.94,
        percentage: 3843.82,
        vendorId: "iure",
      },
    ],
    orderTags: {
      "magnam": "debitis",
    },
    terminal: {
      terminalId: "ipsa",
      terminalPhoneNo: "delectus",
      terminalType: "tempora",
    },
  },
  xApiVersion: "suscipit",
  xClientId: "molestiae",
  xClientSecret: "minus",
}).then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->