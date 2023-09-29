<!-- Start SDK Example Usage -->


```typescript
import { Pg } from "PG";
import { CreateOrderResponse } from "PG/dist/sdk/models/operations";

const sdk = new Pg();

sdk.orders.createOrder({
  createOrderBackendRequest: {
    customerDetails: {
      customerBankAccountNumber: "North double",
      customerBankCode: "spherical woman burdensome",
      customerBankIfsc: "interfaces Smart",
      customerEmail: "Doyle brown toast",
      customerId: "Bedfordshire",
      customerPhone: "Mohr North",
    },
    orderAmount: 10.15,
    orderCurrency: "INR",
    orderExpiryTime: "2021-07-29T00:00:00Z",
    orderId: "deploy South",
    orderMeta: {
      notifyUrl: "Road male Berkshire",
      paymentMethods: "parsing female middleware",
      returnUrl: "Bedfordshire navigating",
    },
    orderNote: "Test order",
    orderSplits: [
      {
        amount: 5942.72,
        percentage: 3302.96,
        vendorId: "dearly remount",
      },
    ],
    orderTags: {
      "expedita": "South",
    },
    terminal: {
      terminalId: "Southwest",
      terminalPhoneNo: "violet Chips Porsche",
      terminalType: "mobile",
    },
  },
  xApiVersion: "ROI bypassing vero",
  xClientId: "Solutions Ferrari Accountability",
  xClientSecret: "Folk ampere",
}).then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->