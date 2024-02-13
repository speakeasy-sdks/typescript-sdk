<!-- Start SDK Example Usage [usage] -->
```typescript
import { Pg } from "PG";

async function run() {
    const sdk = new Pg();

    const res = await sdk.orders.createOrder({
        createOrderBackendRequest: {
            customerDetails: {
                customerBankAccountNumber: "1518121112",
                customerBankCode: "3333",
                customerBankIfsc: "CITI0000001",
                customerEmail: "john@cashfree.com",
                customerId: "7112AAA812234",
                customerPhone: "9908734801",
            },
            orderAmount: 10.15,
            orderCurrency: "INR",
            orderExpiryTime: "2021-07-29T00:00:00Z",
            orderMeta: {
                notifyUrl: "https://b8af79f41056.eu.ngrok.io/webhook.php",
                returnUrl: "https://b8af79f41056.eu.ngrok.io?order_id={order_id}",
            },
            orderNote: "Test order",
            orderSplits: [
                {
                    amount: 100.1,
                    vendorId: "Vendor01",
                },
            ],
            orderTags: {
                key: "string",
            },
            terminal: {
                terminalId: "1",
                terminalPhoneNo: "6309291183",
                terminalType: "SPOS",
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