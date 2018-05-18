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

/**
* The CategoryHierarchy model module.
* @module models/CategoryHierarchy
* @version v2
*/
export default class CategoryHierarchy {
    /**
    * Constructs a new <code>CategoryHierarchy</code>.
    * @alias module:models/CategoryHierarchy
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/CategoryHierarchy>} subcategories
    */
        this.subcategories = undefined
        /**
    *
    * @member {String} id
    */
        this.id = undefined
        /**
    *
    * @member {String} lastModified
    */
        this.lastModified = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {String} url
    */
        this.url = undefined
    }

    /**
    * Constructs a <code>CategoryHierarchy</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CategoryHierarchy} obj Optional instance to
    * populate.
    * @return {module:models/CategoryHierarchy} The populated
    * <code>CategoryHierarchy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryHierarchy()

            if (data.hasOwnProperty('subcategories')) {
                obj.subcategories = ApiClient.convertToType(data.subcategories, [CategoryHierarchy])
            }
            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('lastModified')) {
                obj.lastModified = ApiClient.convertToType(data.lastModified, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
        }
        return obj
    }

}
