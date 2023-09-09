# PG

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/typescript-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/typescript-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create Order
* [orderPay](docs/sdks/orders/README.md#orderpay) - Order Pay
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
