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
### Example

```typescript
import { Pg } from "PG";

(async () => {
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
})();

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



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { Pg } from "PG";

(async () => {
    const sdk = new Pg();

    let res;
    try {
        res = await sdk.orders.createOrder({
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
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://sandbox.cashfree.com/pg` | None |
| 1 | `https://api.cashfree.com/pg` | None |

#### Example

```typescript
import { Pg } from "PG";

(async () => {
    const sdk = new Pg({
        serverIdx: 1,
    });

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
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Pg } from "PG";

(async () => {
    const sdk = new Pg({
        serverURL: "https://sandbox.cashfree.com/pg",
    });

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
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from PG import Pg;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Pg({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
