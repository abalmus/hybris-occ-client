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
* The RegionWsDTOModel model module.
* @module models/RegionWsDTOModel
* @version v2
*/
export default class RegionWsDTOModel {
    /**
    * Constructs a new <code>RegionWsDTOModel</code>.
    * @alias module:models/RegionWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RegionWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/RegionWsDTOModel} obj Optional instance to populate.
    * @return {module:models/RegionWsDTOModel} The populated <code>RegionWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegionWsDTOModel();

            
            
            

            if (data.hasOwnProperty('isocode')) {
                obj['isocode'] = ApiClient.convertToType(data['isocode'], 'String');
            }
            if (data.hasOwnProperty('isocodeShort')) {
                obj['isocodeShort'] = ApiClient.convertToType(data['isocodeShort'], 'String');
            }
            if (data.hasOwnProperty('countryIso')) {
                obj['countryIso'] = ApiClient.convertToType(data['countryIso'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} isocode
    */
    isocode = undefined;
    /**
    * 
    * @member {String} isocodeShort
    */
    isocodeShort = undefined;
    /**
    * 
    * @member {String} countryIso
    */
    countryIso = undefined;
    /**
    * 
    * @member {String} name
    */
    name = undefined;








}

