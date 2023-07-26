/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The customer details that are necessary. Note that you can pass dummy details if your use case does not require the customer details.
 */
export class CustomerDetails extends SpeakeasyBase {
    /**
     * Customer bank account. Required if you want to do a bank account check (TPV)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_bank_account_number" })
    customerBankAccountNumber?: string;

    /**
     * Customer bank code. Required for net banking payments, if you want to do a bank account check (TPV)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_bank_code" })
    customerBankCode?: string;

    /**
     * Customer bank IFSC. Required if you want to do a bank account check (TPV)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_bank_ifsc" })
    customerBankIfsc?: string;

    /**
     * Customer email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_email" })
    customerEmail?: string;

    /**
     * A unique identifier for the customer. Use alphanumeric values only.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId: string;

    /**
     * Customer phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_phone" })
    customerPhone: string;
}
