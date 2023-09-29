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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [orders](docs/sdks/orders/README.md)

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
