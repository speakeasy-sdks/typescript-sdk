/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WHpaymentMethod } from "./whpaymentmethod";
import { Expose, Type } from "class-transformer";

export class WHpayment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "auth_id" })
    authId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bank_reference" })
    bankReference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "cf_payment_id" })
    cfPaymentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_amount" })
    paymentAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_currency" })
    paymentCurrency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_group" })
    paymentGroup?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_message" })
    paymentMessage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_method" })
    @Type(() => WHpaymentMethod)
    paymentMethod?: WHpaymentMethod;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_status" })
    paymentStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_time" })
    paymentTime?: string;
}
