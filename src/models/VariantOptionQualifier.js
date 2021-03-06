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

import ApiClient from '../ApiClient'
import Image from './Image'

/**
* The VariantOptionQualifier model module.
* @module models/VariantOptionQualifier
* @version v2
*/
export default class VariantOptionQualifier {
    /**
    * Constructs a new <code>VariantOptionQualifier</code>.
    * @alias module:models/VariantOptionQualifier
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} qualifier
    */
        this.qualifier = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {String} value
    */
        this.value = undefined
        /**
    * @member {module:models/Image} image
    */
        this.image = undefined
    }

    /**
    * Constructs a <code>VariantOptionQualifier</code> from a plain
    * JavaScript object, optionally creating a new instance. Copies all relevant
    * properties from <code>data</code> to <code>obj</code> if supplied or a new
    * instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/VariantOptionQualifier} obj Optional instance
    * to populate.
    * @return {module:models/VariantOptionQualifier} The populated
    * <code>VariantOptionQualifier</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariantOptionQualifier()

            if (data.hasOwnProperty('qualifier')) {
                obj.qualifier = ApiClient.convertToType(data.qualifier, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
            if (data.hasOwnProperty('image')) {
                obj.image = Image.constructFromObject(data.image)
            }
        }
        return obj
    }



}
