/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * OCC No description provided (generated by Swagger Codegen
 * https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git Do not edit the class
 * manually.
 *
 */
/* eslint-disable camelcase */
const defaultConfig = {
    authorizationUrl: 'https://api-example.hybris.com/authorizationserver/oauth/token',
    client_id: 'mobile_android',
    client_secret: 'secret',
    grant_type: 'password',
}

/**
* The OAuth model module.
* @module models/OAuth
* @version v2
*/
export default class OAuth {
    /**
    * Constructs a new <code>OAuth</code>.
    * @alias module:models/OAuth
    * @class
    */

    constructor(config = defaultConfig) {
        const {
            authorizationUrl,
            client_id,
            client_secret,
            grant_type
        } = config

        /**
    * The authorization server url
    * @member {String} authorizationUrl
    */
        this.authorizationUrl = authorizationUrl
        /**
    * The client id of the client
    * @member {String} client_id
    */
        this.client_id = client_id
        /**
    * The client secret of the client
    * @member {String} client_secret
    */
        this.client_secret = client_secret
        /**
    * The grant type, it can be one of the following
    * options: refresh_token, authorization_code, password,
    * client_credentials
    * @member {String} grant_type
    */
        this.grant_type = grant_type
    }
}
