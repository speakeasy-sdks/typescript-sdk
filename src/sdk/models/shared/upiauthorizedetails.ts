/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UPIAuthorizeDetails extends SpeakeasyBase {
    /**
     * Time by which this authorization should be approved by the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approve_by" })
    approveBy?: string;

    /**
     * This is the time when the UPI mandate will be over. If the mandate has not been executed by this time, the funds will be returned back to the customer after this time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_time" })
    endTime?: string;

    /**
     * This is the time when the UPI one time mandate will start
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_time" })
    startTime?: string;
}