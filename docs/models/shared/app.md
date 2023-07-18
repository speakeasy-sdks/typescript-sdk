# App


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `channel`                                                         | *string*                                                          | :heavy_check_mark:                                                | Specify the channel through which the payment must be processed.  |
| `phone`                                                           | *string*                                                          | :heavy_check_mark:                                                | Customer phone number associated with a wallet for payment.       |
| `provider`                                                        | [AppProvider](../../models/shared/appprovider.md)                 | :heavy_check_mark:                                                | Specify the provider through which the payment must be processed. |