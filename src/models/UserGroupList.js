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
import UserGroupOCC from './UserGroupOCC'

/**
* The UserGroupList model module.
* @module models/UserGroupList
* @version v2
*/
export default class UserGroupList {
    /**
    * Constructs a new <code>UserGroupList</code>.
    * @alias module:models/UserGroupList
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/UserGroupOCC>} userGroups
    */
        this.userGroups = undefined
        /**
    *
    * @member {Number} totalNumber
    */
        this.totalNumber = undefined
        /**
    *
    * @member {Number} pageSize
    */
        this.pageSize = undefined
        /**
    *
    * @member {Number} numberOfPages
    */
        this.numberOfPages = undefined
        /**
    *
    * @member {Number} currentPage
    */
        this.currentPage = undefined

    }

    /**
    * Constructs a <code>UserGroupList</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/UserGroupList} obj Optional instance to
    * populate.
    * @return {module:models/UserGroupList} The populated
    * <code>UserGroupList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroupList()

            if (data.hasOwnProperty('userGroups')) {
                obj.userGroups = ApiClient.convertToType(data.userGroups, [UserGroupOCC])
            }
            if (data.hasOwnProperty('totalNumber')) {
                obj.totalNumber = ApiClient.convertToType(data.totalNumber, 'Number')
            }
            if (data.hasOwnProperty('pageSize')) {
                obj.pageSize = ApiClient.convertToType(data.pageSize, 'Number')
            }
            if (data.hasOwnProperty('numberOfPages')) {
                obj.numberOfPages = ApiClient.convertToType(data.numberOfPages, 'Number')
            }
            if (data.hasOwnProperty('currentPage')) {
                obj.currentPage = ApiClient.convertToType(data.currentPage, 'Number')
            }
        }
        return obj
    }


}