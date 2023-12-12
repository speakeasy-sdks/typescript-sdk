<!-- Start SDK Example Usage [usage] -->
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
            orderSplits: [{}],
            orderTags: {
                key: "string",
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
<!-- End SDK Example Usage [usage] -->