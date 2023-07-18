/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * authentication_error
 */
export enum AuthenticationErrorType {
    AuthenticationError = "authentication_error",
}

/**
 * Authentication Error
 */
export class AuthenticationError extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * authentication_error
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: AuthenticationErrorType;
}
