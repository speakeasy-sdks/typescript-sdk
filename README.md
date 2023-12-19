# PG

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/typescript-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/typescript-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create Order
* [orderPay](docs/sdks/orders/README.md#orderpay) - Order Pay
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Pg } from "PG";

async function run() {
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
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
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

async function run() {
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
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Pg } from "PG";

async function run() {
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
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { PG } from "Pg";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Pg({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
