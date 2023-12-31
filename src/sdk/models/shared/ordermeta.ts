/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class OrderMeta extends SpeakeasyBase {
    /**
     * Notification URL for server-server communication. Useful when user's connection drops while re-directing. NotifyUrl should be an https URL. Maximum length: 250.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notify_url" })
    notifyUrl?: string;

    /**
     * Allowed payment modes for this order. Pass comma-separated values among following options - "cc", "dc", "ccc", "ppc","nb","upi","paypal","app","paylater","cardlessemi","dcemi","ccemi","banktransfer". Leave it blank to show all available payment methods
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_methods" })
    paymentMethods?: string;

    /**
     * The URL to which user will be redirected to after the payment on bank OTP page. Maximum length: 250. The return_url must contain placeholder {order_id}. When redirecting the customer back to the return url from the bank’s OTP page, Cashfree will replace this placeholder with the actual value for that order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "return_url" })
    returnUrl?: string;
}
