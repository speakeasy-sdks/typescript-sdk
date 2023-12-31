/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerDetails } from "./customerdetails";
import { OrderMeta } from "./ordermeta";
import { TerminalDetails } from "./terminaldetails";
import { VendorSplit } from "./vendorsplit";
import { Expose, Type } from "class-transformer";

export class CreateOrderBackendRequest extends SpeakeasyBase {
    /**
     * The customer details that are necessary. Note that you can pass dummy details if your use case does not require the customer details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_details" })
    @Type(() => CustomerDetails)
    customerDetails: CustomerDetails;

    /**
     * Bill amount for the order. Provide upto two decimals. 10.15 means Rs 10 and 15 paisa
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_amount" })
    orderAmount: number;

    /**
     * Currency for the order. INR if left empty. Contact care@cashfree.com to enable new currencies.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_currency" })
    orderCurrency: string;

    /**
     * Time after which the order expires. Customers will not be able to make the payment beyond the time specified here. We store timestamps in IST, but you can provide them in a valid ISO 8601 time format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_expiry_time" })
    orderExpiryTime?: string;

    /**
     * Order identifier present in your system. Alphanumeric and only - and _ allowed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_id" })
    orderId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_meta" })
    @Type(() => OrderMeta)
    orderMeta?: OrderMeta;

    /**
     * Order note for reference.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_note" })
    orderNote?: string;

    @SpeakeasyMetadata({ elemType: VendorSplit })
    @Expose({ name: "order_splits" })
    @Type(() => VendorSplit)
    orderSplits?: VendorSplit[];

    /**
     * Custom Tags which can be passed for an order. A maximum of 6 tags can be added
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_tags" })
    orderTags?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "terminal" })
    @Type(() => TerminalDetails)
    terminal?: TerminalDetails;
}
