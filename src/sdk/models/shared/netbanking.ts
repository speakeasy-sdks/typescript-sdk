/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Netbanking extends SpeakeasyBase {
    /**
     * The channel for netbanking will always be `link`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "channel" })
    channel: string;

    /**
     * Bank code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "netbanking_bank_code" })
    netbankingBankCode: number;
}
