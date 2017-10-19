/**
 * OCC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The SearchQueryWsDTOModel model module.
* @module models/SearchQueryWsDTOModel
* @version v2
*/
export default class SearchQueryWsDTOModel {
    /**
    * Constructs a new <code>SearchQueryWsDTOModel</code>.
    * @alias module:models/SearchQueryWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SearchQueryWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SearchQueryWsDTOModel} obj Optional instance to populate.
    * @return {module:models/SearchQueryWsDTOModel} The populated <code>SearchQueryWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchQueryWsDTOModel();

            
            
            

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} value
    */
    value = undefined;








}

