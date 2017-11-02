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
import Breadcrumb from './Breadcrumb'
import Facet from './Facet'
import Pagination from './Pagination'
import ProductOCC1 from './ProductOCC1'
import SearchState from './SearchState'
import Sort from './Sort'
import SpellingSuggestion from './SpellingSuggestion'

/**
* The ProductSearchPage model module.
* @module models/ProductSearchPage
* @version v2
*/
export default class ProductSearchPage {
    /**
    * Constructs a new <code>ProductSearchPage</code>. POJO containing the
    * result page for product search.
    * @alias module:models/ProductSearchPage
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} freeTextSearch
    */
        this.freeTextSearch = undefined
        /**
    *
    * @member {String} categoryCode
    */
        this.categoryCode = undefined
        /**
    *
    * @member {String} keywordRedirectUrl
    */
        this.keywordRedirectUrl = undefined
        /**
    * @member {module:models/SpellingSuggestion} spellingSuggestion
    */
        this.spellingSuggestion = undefined
        /**
    *
    * @member {Array.<module:models/ProductOCC1>} products
    */
        this.products = undefined
        /**
    *
    * @member {Array.<module:models/Sort>} sorts
    */
        this.sorts = undefined
        /**
    * @member {module:models/Pagination} pagination
    */
        this.pagination = undefined
        /**
    * @member {module:models/SearchState} currentQuery
    */
        this.currentQuery = undefined
        /**
    *
    * @member {Array.<module:models/Breadcrumb>} breadcrumbs
    */
        this.breadcrumbs = undefined
        /**
    *
    * @member {Array.<module:models/Facet>} facets
    */
        this.facets = undefined
    }

    /**
    * Constructs a <code>ProductSearchPage</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ProductSearchPage} obj Optional instance to
    * populate.
    * @return {module:models/ProductSearchPage} The populated
    * <code>ProductSearchPage</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchPage()

            if (data.hasOwnProperty('freeTextSearch')) {
                obj.freeTextSearch = ApiClient.convertToType(data.freeTextSearch, 'String')
            }
            if (data.hasOwnProperty('categoryCode')) {
                obj.categoryCode = ApiClient.convertToType(data.categoryCode, 'String')
            }
            if (data.hasOwnProperty('keywordRedirectUrl')) {
                obj.keywordRedirectUrl = ApiClient.convertToType(data.keywordRedirectUrl, 'String')
            }
            if (data.hasOwnProperty('spellingSuggestion')) {
                obj.spellingSuggestion = SpellingSuggestion.constructFromObject(data.spellingSuggestion)
            }
            if (data.hasOwnProperty('products')) {
                obj.products = ApiClient.convertToType(data.products, [ProductOCC1])
            }
            if (data.hasOwnProperty('sorts')) {
                obj.sorts = ApiClient.convertToType(data.sorts, [Sort])
            }
            if (data.hasOwnProperty('pagination')) {
                obj.pagination = Pagination.constructFromObject(data.pagination)
            }
            if (data.hasOwnProperty('currentQuery')) {
                obj.currentQuery = SearchState.constructFromObject(data.currentQuery)
            }
            if (data.hasOwnProperty('breadcrumbs')) {
                obj.breadcrumbs = ApiClient.convertToType(data.breadcrumbs, [Breadcrumb])
            }
            if (data.hasOwnProperty('facets')) {
                obj.facets = ApiClient.convertToType(data.facets, [Facet])
            }
        }
        return obj
    }



}