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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create Order
* [orderPay](docs/sdks/orders/README.md#orderpay) - Order Pay
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->



<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:


<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
