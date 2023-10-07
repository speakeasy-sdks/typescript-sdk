<!-- Start SDK Example Usage -->


```typescript
import { Pg } from "PG";

(async() => {
  const sdk = new Pg();

  const res = await sdk.orders.createOrder({
    createOrderBackendRequest: {
      customerDetails: {
        customerId: "North double",
        customerPhone: "spherical woman burdensome",
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
        "temporibus": "SUV",
      },
      terminal: {
        terminalId: "overriding",
        terminalPhoneNo: "Southeast Southwest but",
        terminalType: "Recycled",
      },
    },
    xClientId: "Orchestrator",
    xClientSecret: "implement",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->