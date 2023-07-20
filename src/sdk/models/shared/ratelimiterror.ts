/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * rate_limit_error
 */
export enum RateLimitErrorType {
    RateLimitError = "rate_limit_error",
}

/**
 * Rate Limit Error
 */
export class RateLimitError extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * rate_limit_error
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: RateLimitErrorType;
}