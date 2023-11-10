/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerDetails } from "./customerdetails";
import { OrderMeta } from "./ordermeta";
import { PaymentURLObject } from "./paymenturlobject";
import { RefundURLObject } from "./refundurlobject";
import { SettlementURLObject } from "./settlementurlobject";
import { Expose, Type } from "class-transformer";

export class OrdersEntity extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cf_order_id" })
    cfOrderId?: number;

    /**
     * The customer details that are necessary. Note that you can pass dummy details if your use case does not require the customer details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_details" })
    @Type(() => CustomerDetails)
    customerDetails?: CustomerDetails;

    @SpeakeasyMetadata()
    @Expose({ name: "entity" })
    entity?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_amount" })
    orderAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "order_currency" })
    orderCurrency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_expiry_time" })
    orderExpiryTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_id" })
    orderId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_meta" })
    @Type(() => OrderMeta)
    orderMeta?: OrderMeta;

    @SpeakeasyMetadata()
    @Expose({ name: "order_note" })
    orderNote?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_status" })
    orderStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_session_id" })
    paymentSessionId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payments" })
    @Type(() => PaymentURLObject)
    payments?: PaymentURLObject;

    @SpeakeasyMetadata()
    @Expose({ name: "refunds" })
    @Type(() => RefundURLObject)
    refunds?: RefundURLObject;

    @SpeakeasyMetadata()
    @Expose({ name: "settlements" })
    @Type(() => SettlementURLObject)
    settlements?: SettlementURLObject;
}
