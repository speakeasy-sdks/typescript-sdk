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
        amount: 3843.82,
        percentage: 4375.87,
        vendorId: "magnam",
      },
      {
        amount: 8917.73,
        percentage: 567.13,
        vendorId: "delectus",
      },
      {
        amount: 2726.56,
        percentage: 3834.41,
        vendorId: "molestiae",
      },
    ],
    orderTags: {
      "placeat": "voluptatum",
      "iusto": "excepturi",
      "nisi": "recusandae",
      "temporibus": "ab",
    },
    terminal: {
      terminalId: "quis",
      terminalPhoneNo: "veritatis",
      terminalType: "deserunt",
    },
  },
  xApiVersion: "perferendis",
  xClientId: "ipsam",
  xClientSecret: "repellendus",
}).then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->