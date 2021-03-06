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
import CategoryHierarchy from './CategoryHierarchy'

/**
* The CatalogVersion model module.
* @module models/CatalogVersion
* @version v2
*/
export default class CatalogVersion {
    /**
    * Constructs a new <code>CatalogVersion</code>.
    * @alias module:models/CatalogVersion
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/CategoryHierarchy>} categories
    */
        this.categories = undefined
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
    * Constructs a <code>CatalogVersion</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CatalogVersion} obj Optional instance to
    * populate.
    * @return {module:models/CatalogVersion} The populated
    * <code>CatalogVersion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogVersion()

            if (data.hasOwnProperty('categories')) {
                obj.categories = ApiClient.convertToType(data.categories, [CategoryHierarchy])
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
