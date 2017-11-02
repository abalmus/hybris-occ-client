/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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

import ApiClient from './ApiClient'
import AddressListWsDTO from './models/AddressListWsDTO'
import AddressOCC from './models/AddressOCC'
import AddressWsDTO from './models/AddressWsDTO'
import BaseOptionWsDTO from './models/BaseOptionWsDTO'
import BillingAddress from './models/BillingAddress'
import BreadcrumbWsDTO from './models/BreadcrumbWsDTO'
import CardTypeListWsDTO from './models/CardTypeListWsDTO'
import CardTypeWsDTO from './models/CardTypeWsDTO'
import CartListWsDTO from './models/CartListWsDTO'
import CartWsDTO from './models/CartWsDTO'
import CatalogListWsDTO from './models/CatalogListWsDTO'
import CatalogVersionWsDTO from './models/CatalogVersionWsDTO'
import CatalogWsDTO from './models/CatalogWsDTO'
import CategoryHierarchyWsDTO from './models/CategoryHierarchyWsDTO'
import CategoryWsDTO from './models/CategoryWsDTO'
import ClassificationWsDTO from './models/ClassificationWsDTO'
import ConsignmentEntryWsDTO from './models/ConsignmentEntryWsDTO'
import ConsignmentWsDTO from './models/ConsignmentWsDTO'
import CountryListWsDTO from './models/CountryListWsDTO'
import Country from './models/Country'
import CountryOCC from './models/CountryOCC'
import CurrencyListWsDTO from './models/CurrencyListWsDTO'
import Currency from './models/Currency'
import CurrencyOCC from './models/CurrencyOCC'
import DeliveryModeListWsDTO from './models/DeliveryModeListWsDTO'
import DeliveryModeWsDTO from './models/DeliveryModeWsDTO'
import DeliveryOrderEntryGroupWsDTO from './models/DeliveryOrderEntryGroupWsDTO'
import DeliveryPointOfService from './models/DeliveryPointOfService'
import FacetValueWsDTO from './models/FacetValueWsDTO'
import FacetWsDTO from './models/FacetWsDTO'
import FeatureUnitWsDTO from './models/FeatureUnitWsDTO'
import FeatureValueWsDTO from './models/FeatureValueWsDTO'
import FeatureWsDTO from './models/FeatureWsDTO'
import FutureStockWsDTO from './models/FutureStockWsDTO'
import GeoPointWsDTO from './models/GeoPointWsDTO'
import ImageWsDTO from './models/ImageWsDTO'
import LanguageListWsDTO from './models/LanguageListWsDTO'
import Language from './models/Language'
import LanguageOCC from './models/LanguageOCC'
import MemberListWsDTO from './models/MemberListWsDTO'
import Member from './models/Member'
import OpeningScheduleWsDTO from './models/OpeningScheduleWsDTO'
import OrderEntryListWsDTO from './models/OrderEntryListWsDTO'
import OrderEntryOCC from './models/OrderEntryOCC'
import OrderEntryWsDTO from './models/OrderEntryWsDTO'
import OrderHistoryListWsDTO from './models/OrderHistoryListWsDTO'
import OrderHistoryWsDTO from './models/OrderHistoryWsDTO'
import OrderStatusUpdateElementListWsDTO from './models/OrderStatusUpdateElementListWsDTO'
import OrderStatusUpdateElementWsDTO from './models/OrderStatusUpdateElementWsDTO'
import OrderWsDTO from './models/OrderWsDTO'
import PaginationWsDTO from './models/PaginationWsDTO'
import PaymentDetailsListWsDTO from './models/PaymentDetailsListWsDTO'
import PaymentDetailsOCC from './models/PaymentDetailsOCC'
import PaymentDetailsWsDTO from './models/PaymentDetailsWsDTO'
import PickupOrderEntryGroupWsDTO from './models/PickupOrderEntryGroupWsDTO'
import PointOfServiceStockWsDTO from './models/PointOfServiceStockWsDTO'
import PointOfServiceWsDTO from './models/PointOfServiceWsDTO'
import PriceRangeWsDTO from './models/PriceRangeWsDTO'
import PriceWsDTO from './models/PriceWsDTO'
import PrincipalWsDTO from './models/PrincipalWsDTO'
import ProductExpressUpdateElementListWsDTO from './models/ProductExpressUpdateElementListWsDTO'
import ProductExpressUpdateElementWsDTO from './models/ProductExpressUpdateElementWsDTO'
import ProductListWsDTO from './models/ProductListWsDTO'
import Product from './models/Product'
import ProductReferenceListWsDTO from './models/ProductReferenceListWsDTO'
import ProductReferenceOCC from './models/ProductReferenceOCC'
import ProductReferenceWsDTO from './models/ProductReferenceWsDTO'
import ProductSearchPageWsDTO from './models/ProductSearchPageWsDTO'
import ProductOCC from './models/ProductOCC'
import ProductOCC1 from './models/ProductOCC1'
import PromotionListWsDTO from './models/PromotionListWsDTO'
import PromotionOrderEntryConsumedWsDTO from './models/PromotionOrderEntryConsumedWsDTO'
import PromotionRestrictionWsDTO from './models/PromotionRestrictionWsDTO'
import PromotionResultListWsDTO from './models/PromotionResultListWsDTO'
import PromotionResultWsDTO from './models/PromotionResultWsDTO'
import PromotionWsDTO from './models/PromotionWsDTO'
import Region from './models/Region'
import RegionOCC from './models/RegionOCC'
import ReviewListWsDTO from './models/ReviewListWsDTO'
import ReviewOCC from './models/ReviewOCC'
import ReviewWsDTO from './models/ReviewWsDTO'
import SaveCartResultWsDTO from './models/SaveCartResultWsDTO'
import SearchQueryWsDTO from './models/SearchQueryWsDTO'
import SearchStateWsDTO from './models/SearchStateWsDTO'
import SortWsDTO from './models/SortWsDTO'
import SpecialOpeningDayWsDTO from './models/SpecialOpeningDayWsDTO'
import SpellingSuggestionWsDTO from './models/SpellingSuggestionWsDTO'
import StockWsDTO from './models/StockWsDTO'
import StoreFinderSearchPageWsDTO from './models/StoreFinderSearchPageWsDTO'
import StoreFinderStockSearchPageWsDTO from './models/StoreFinderStockSearchPageWsDTO'
import SuggestionListWsDTO from './models/SuggestionListWsDTO'
import SuggestionWsDTO from './models/SuggestionWsDTO'
import TimeWsDTO from './models/TimeWsDTO'
import TitleListWsDTO from './models/TitleListWsDTO'
import TitleWsDTO from './models/TitleWsDTO'
import UserGroupListWsDTO from './models/UserGroupListWsDTO'
import UserGroupOCC from './models/UserGroupOCC'
import UserGroupWsDTO from './models/UserGroupWsDTO'
import UserSignUpWsDTO from './models/UserSignUpWsDTO'
import UserOCC from './models/UserOCC'
import UserWsDTO from './models/UserWsDTO'
import VariantCategoryWsDTO from './models/VariantCategoryWsDTO'
import VariantMatrixElementWsDTO from './models/VariantMatrixElementWsDTO'
import VariantOptionQualifierWsDTO from './models/VariantOptionQualifierWsDTO'
import VariantOptionWsDTO from './models/VariantOptionWsDTO'
import VariantValueCategoryWsDTO from './models/VariantValueCategoryWsDTO'
import VoucherListWsDTO from './models/VoucherListWsDTO'
import VoucherWsDTO from './models/VoucherWsDTO'
import WeekdayOpeningDayWsDTO from './models/WeekdayOpeningDayWsDTO'
import CardtypesApi from './api/CardtypesApi'
import CatalogsApi from './api/CatalogsApi'
import CurrenciesApi from './api/CurrenciesApi'
import CustomergroupsApi from './api/CustomergroupsApi'
import DeliverycountriesApi from './api/DeliverycountriesApi'
import ExportApi from './api/ExportApi'
import FeedsApi from './api/FeedsApi'
import ForgottenpasswordtokensApi from './api/ForgottenpasswordtokensApi'
import LanguagesApi from './api/LanguagesApi'
import OrdersApi from './api/OrdersApi'
import ProductsApi from './api/ProductsApi'
import PromotionsApi from './api/PromotionsApi'
import StoresApi from './api/StoresApi'
import TitlesApi from './api/TitlesApi'
import UsersApi from './api/UsersApi'
import VouchersApi from './api/VouchersApi'

/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Occ = require('index'); // See note below*.
* var xxxSvc = new Occ.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Occ.Yyy(); // Construct a model instance.
* yyy.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyy); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Occ.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Occ.Yyy(); // Construct a model instance.
* yyy.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyy); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v2
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AddressListWsDTO model constructor.
     * @property {module:models/AddressListWsDTO}
     */
    AddressListWsDTO,

    /**
     * The AddressOCC model constructor.
     * @property {module:models/AddressOCC}
     */
    AddressOCC,

    /**
     * The AddressWsDTO model constructor.
     * @property {module:models/AddressWsDTO}
     */
    AddressWsDTO,

    /**
     * The BaseOptionWsDTO model constructor.
     * @property {module:models/BaseOptionWsDTO}
     */
    BaseOptionWsDTO,

    /**
     * The BillingAddress model constructor.
     * @property {module:models/BillingAddress}
     */
    BillingAddress,

    /**
     * The BreadcrumbWsDTO model constructor.
     * @property {module:models/BreadcrumbWsDTO}
     */
    BreadcrumbWsDTO,

    /**
     * The CardTypeListWsDTO model constructor.
     * @property {module:models/CardTypeListWsDTO}
     */
    CardTypeListWsDTO,

    /**
     * The CardTypeWsDTO model constructor.
     * @property {module:models/CardTypeWsDTO}
     */
    CardTypeWsDTO,

    /**
     * The CartListWsDTO model constructor.
     * @property {module:models/CartListWsDTO}
     */
    CartListWsDTO,

    /**
     * The CartWsDTO model constructor.
     * @property {module:models/CartWsDTO}
     */
    CartWsDTO,

    /**
     * The CatalogListWsDTO model constructor.
     * @property {module:models/CatalogListWsDTO}
     */
    CatalogListWsDTO,

    /**
     * The CatalogVersionWsDTO model constructor.
     * @property {module:models/CatalogVersionWsDTO}
     */
    CatalogVersionWsDTO,

    /**
     * The CatalogWsDTO model constructor.
     * @property {module:models/CatalogWsDTO}
     */
    CatalogWsDTO,

    /**
     * The CategoryHierarchyWsDTO model constructor.
     * @property {module:models/CategoryHierarchyWsDTO}
     */
    CategoryHierarchyWsDTO,

    /**
     * The CategoryWsDTO model constructor.
     * @property {module:models/CategoryWsDTO}
     */
    CategoryWsDTO,

    /**
     * The ClassificationWsDTO model constructor.
     * @property {module:models/ClassificationWsDTO}
     */
    ClassificationWsDTO,

    /**
     * The ConsignmentEntryWsDTO model constructor.
     * @property {module:models/ConsignmentEntryWsDTO}
     */
    ConsignmentEntryWsDTO,

    /**
     * The ConsignmentWsDTO model constructor.
     * @property {module:models/ConsignmentWsDTO}
     */
    ConsignmentWsDTO,

    /**
     * The CountryListWsDTO model constructor.
     * @property {module:models/CountryListWsDTO}
     */
    CountryListWsDTO,

    /**
     * The Country model constructor.
     * @property {module:models/Country}
     */
    Country,

    /**
     * The CountryOCC model constructor.
     * @property {module:models/CountryOCC}
     */
    CountryOCC,

    /**
     * The CurrencyListWsDTO model constructor.
     * @property {module:models/CurrencyListWsDTO}
     */
    CurrencyListWsDTO,

    /**
     * The Currency model constructor.
     * @property {module:models/Currency}
     */
    Currency,

    /**
     * The CurrencyOCC model constructor.
     * @property {module:models/CurrencyOCC}
     */
    CurrencyOCC,

    /**
     * The DeliveryModeListWsDTO model constructor.
     * @property {module:models/DeliveryModeListWsDTO}
     */
    DeliveryModeListWsDTO,

    /**
     * The DeliveryModeWsDTO model constructor.
     * @property {module:models/DeliveryModeWsDTO}
     */
    DeliveryModeWsDTO,

    /**
     * The DeliveryOrderEntryGroupWsDTO model constructor.
     * @property {module:models/DeliveryOrderEntryGroupWsDTO}
     */
    DeliveryOrderEntryGroupWsDTO,

    /**
     * The DeliveryPointOfService model constructor.
     * @property {module:models/DeliveryPointOfService}
     */
    DeliveryPointOfService,

    /**
     * The FacetValueWsDTO model constructor.
     * @property {module:models/FacetValueWsDTO}
     */
    FacetValueWsDTO,

    /**
     * The FacetWsDTO model constructor.
     * @property {module:models/FacetWsDTO}
     */
    FacetWsDTO,

    /**
     * The FeatureUnitWsDTO model constructor.
     * @property {module:models/FeatureUnitWsDTO}
     */
    FeatureUnitWsDTO,

    /**
     * The FeatureValueWsDTO model constructor.
     * @property {module:models/FeatureValueWsDTO}
     */
    FeatureValueWsDTO,

    /**
     * The FeatureWsDTO model constructor.
     * @property {module:models/FeatureWsDTO}
     */
    FeatureWsDTO,

    /**
     * The FutureStockWsDTO model constructor.
     * @property {module:models/FutureStockWsDTO}
     */
    FutureStockWsDTO,

    /**
     * The GeoPointWsDTO model constructor.
     * @property {module:models/GeoPointWsDTO}
     */
    GeoPointWsDTO,

    /**
     * The ImageWsDTO model constructor.
     * @property {module:models/ImageWsDTO}
     */
    ImageWsDTO,

    /**
     * The LanguageListWsDTO model constructor.
     * @property {module:models/LanguageListWsDTO}
     */
    LanguageListWsDTO,

    /**
     * The Language model constructor.
     * @property {module:models/Language}
     */
    Language,

    /**
     * The LanguageOCC model constructor.
     * @property {module:models/LanguageOCC}
     */
    LanguageOCC,

    /**
     * The MemberListWsDTO model constructor.
     * @property {module:models/MemberListWsDTO}
     */
    MemberListWsDTO,

    /**
     * The Member model constructor.
     * @property {module:models/Member}
     */
    Member,

    /**
     * The OpeningScheduleWsDTO model constructor.
     * @property {module:models/OpeningScheduleWsDTO}
     */
    OpeningScheduleWsDTO,

    /**
     * The OrderEntryListWsDTO model constructor.
     * @property {module:models/OrderEntryListWsDTO}
     */
    OrderEntryListWsDTO,

    /**
     * The OrderEntryOCC model constructor.
     * @property {module:models/OrderEntryOCC}
     */
    OrderEntryOCC,

    /**
     * The OrderEntryWsDTO model constructor.
     * @property {module:models/OrderEntryWsDTO}
     */
    OrderEntryWsDTO,

    /**
     * The OrderHistoryListWsDTO model constructor.
     * @property {module:models/OrderHistoryListWsDTO}
     */
    OrderHistoryListWsDTO,

    /**
     * The OrderHistoryWsDTO model constructor.
     * @property {module:models/OrderHistoryWsDTO}
     */
    OrderHistoryWsDTO,

    /**
     * The OrderStatusUpdateElementListWsDTO model constructor.
     * @property {module:models/OrderStatusUpdateElementListWsDTO}
     */
    OrderStatusUpdateElementListWsDTO,

    /**
     * The OrderStatusUpdateElementWsDTO model constructor.
     * @property {module:models/OrderStatusUpdateElementWsDTO}
     */
    OrderStatusUpdateElementWsDTO,

    /**
     * The OrderWsDTO model constructor.
     * @property {module:models/OrderWsDTO}
     */
    OrderWsDTO,

    /**
     * The PaginationWsDTO model constructor.
     * @property {module:models/PaginationWsDTO}
     */
    PaginationWsDTO,

    /**
     * The PaymentDetailsListWsDTO model constructor.
     * @property {module:models/PaymentDetailsListWsDTO}
     */
    PaymentDetailsListWsDTO,

    /**
     * The PaymentDetailsOCC model constructor.
     * @property {module:models/PaymentDetailsOCC}
     */
    PaymentDetailsOCC,

    /**
     * The PaymentDetailsWsDTO model constructor.
     * @property {module:models/PaymentDetailsWsDTO}
     */
    PaymentDetailsWsDTO,

    /**
     * The PickupOrderEntryGroupWsDTO model constructor.
     * @property {module:models/PickupOrderEntryGroupWsDTO}
     */
    PickupOrderEntryGroupWsDTO,

    /**
     * The PointOfServiceStockWsDTO model constructor.
     * @property {module:models/PointOfServiceStockWsDTO}
     */
    PointOfServiceStockWsDTO,

    /**
     * The PointOfServiceWsDTO model constructor.
     * @property {module:models/PointOfServiceWsDTO}
     */
    PointOfServiceWsDTO,

    /**
     * The PriceRangeWsDTO model constructor.
     * @property {module:models/PriceRangeWsDTO}
     */
    PriceRangeWsDTO,

    /**
     * The PriceWsDTO model constructor.
     * @property {module:models/PriceWsDTO}
     */
    PriceWsDTO,

    /**
     * The PrincipalWsDTO model constructor.
     * @property {module:models/PrincipalWsDTO}
     */
    PrincipalWsDTO,

    /**
     * The ProductExpressUpdateElementListWsDTO model constructor.
     * @property {module:models/ProductExpressUpdateElementListWsDTO}
     */
    ProductExpressUpdateElementListWsDTO,

    /**
     * The ProductExpressUpdateElementWsDTO model constructor.
     * @property {module:models/ProductExpressUpdateElementWsDTO}
     */
    ProductExpressUpdateElementWsDTO,

    /**
     * The ProductListWsDTO model constructor.
     * @property {module:models/ProductListWsDTO}
     */
    ProductListWsDTO,

    /**
     * The Product model constructor.
     * @property {module:models/Product}
     */
    Product,

    /**
     * The ProductReferenceListWsDTO model constructor.
     * @property {module:models/ProductReferenceListWsDTO}
     */
    ProductReferenceListWsDTO,

    /**
     * The ProductReferenceOCC model constructor.
     * @property {module:models/ProductReferenceOCC}
     */
    ProductReferenceOCC,

    /**
     * The ProductReferenceWsDTO model constructor.
     * @property {module:models/ProductReferenceWsDTO}
     */
    ProductReferenceWsDTO,

    /**
     * The ProductSearchPageWsDTO model constructor.
     * @property {module:models/ProductSearchPageWsDTO}
     */
    ProductSearchPageWsDTO,

    /**
     * The ProductOCC model constructor.
     * @property {module:models/ProductOCC}
     */
    ProductOCC,

    /**
     * The ProductOCC1 model constructor.
     * @property {module:models/ProductOCC1}
     */
    ProductOCC1,

    /**
     * The PromotionListWsDTO model constructor.
     * @property {module:models/PromotionListWsDTO}
     */
    PromotionListWsDTO,

    /**
     * The PromotionOrderEntryConsumedWsDTO model constructor.
     * @property {module:models/PromotionOrderEntryConsumedWsDTO}
     */
    PromotionOrderEntryConsumedWsDTO,

    /**
     * The PromotionRestrictionWsDTO model constructor.
     * @property {module:models/PromotionRestrictionWsDTO}
     */
    PromotionRestrictionWsDTO,

    /**
     * The PromotionResultListWsDTO model constructor.
     * @property {module:models/PromotionResultListWsDTO}
     */
    PromotionResultListWsDTO,

    /**
     * The PromotionResultWsDTO model constructor.
     * @property {module:models/PromotionResultWsDTO}
     */
    PromotionResultWsDTO,

    /**
     * The PromotionWsDTO model constructor.
     * @property {module:models/PromotionWsDTO}
     */
    PromotionWsDTO,

    /**
     * The Region model constructor.
     * @property {module:models/Region}
     */
    Region,

    /**
     * The RegionOCC model constructor.
     * @property {module:models/RegionOCC}
     */
    RegionOCC,

    /**
     * The ReviewListWsDTO model constructor.
     * @property {module:models/ReviewListWsDTO}
     */
    ReviewListWsDTO,

    /**
     * The ReviewOCC model constructor.
     * @property {module:models/ReviewOCC}
     */
    ReviewOCC,

    /**
     * The ReviewWsDTO model constructor.
     * @property {module:models/ReviewWsDTO}
     */
    ReviewWsDTO,

    /**
     * The SaveCartResultWsDTO model constructor.
     * @property {module:models/SaveCartResultWsDTO}
     */
    SaveCartResultWsDTO,

    /**
     * The SearchQueryWsDTO model constructor.
     * @property {module:models/SearchQueryWsDTO}
     */
    SearchQueryWsDTO,

    /**
     * The SearchStateWsDTO model constructor.
     * @property {module:models/SearchStateWsDTO}
     */
    SearchStateWsDTO,

    /**
     * The SortWsDTO model constructor.
     * @property {module:models/SortWsDTO}
     */
    SortWsDTO,

    /**
     * The SpecialOpeningDayWsDTO model constructor.
     * @property {module:models/SpecialOpeningDayWsDTO}
     */
    SpecialOpeningDayWsDTO,

    /**
     * The SpellingSuggestionWsDTO model constructor.
     * @property {module:models/SpellingSuggestionWsDTO}
     */
    SpellingSuggestionWsDTO,

    /**
     * The StockWsDTO model constructor.
     * @property {module:models/StockWsDTO}
     */
    StockWsDTO,

    /**
     * The StoreFinderSearchPageWsDTO model constructor.
     * @property {module:models/StoreFinderSearchPageWsDTO}
     */
    StoreFinderSearchPageWsDTO,

    /**
     * The StoreFinderStockSearchPageWsDTO model constructor.
     * @property {module:models/StoreFinderStockSearchPageWsDTO}
     */
    StoreFinderStockSearchPageWsDTO,

    /**
     * The SuggestionListWsDTO model constructor.
     * @property {module:models/SuggestionListWsDTO}
     */
    SuggestionListWsDTO,

    /**
     * The SuggestionWsDTO model constructor.
     * @property {module:models/SuggestionWsDTO}
     */
    SuggestionWsDTO,

    /**
     * The TimeWsDTO model constructor.
     * @property {module:models/TimeWsDTO}
     */
    TimeWsDTO,

    /**
     * The TitleListWsDTO model constructor.
     * @property {module:models/TitleListWsDTO}
     */
    TitleListWsDTO,

    /**
     * The TitleWsDTO model constructor.
     * @property {module:models/TitleWsDTO}
     */
    TitleWsDTO,

    /**
     * The UserGroupListWsDTO model constructor.
     * @property {module:models/UserGroupListWsDTO}
     */
    UserGroupListWsDTO,

    /**
     * The UserGroupOCC model constructor.
     * @property {module:models/UserGroupOCC}
     */
    UserGroupOCC,

    /**
     * The UserGroupWsDTO model constructor.
     * @property {module:models/UserGroupWsDTO}
     */
    UserGroupWsDTO,

    /**
     * The UserSignUpWsDTO model constructor.
     * @property {module:models/UserSignUpWsDTO}
     */
    UserSignUpWsDTO,

    /**
     * The UserOCC model constructor.
     * @property {module:models/UserOCC}
     */
    UserOCC,

    /**
     * The UserWsDTO model constructor.
     * @property {module:models/UserWsDTO}
     */
    UserWsDTO,

    /**
     * The VariantCategoryWsDTO model constructor.
     * @property {module:models/VariantCategoryWsDTO}
     */
    VariantCategoryWsDTO,

    /**
     * The VariantMatrixElementWsDTO model constructor.
     * @property {module:models/VariantMatrixElementWsDTO}
     */
    VariantMatrixElementWsDTO,

    /**
     * The VariantOptionQualifierWsDTO model constructor.
     * @property {module:models/VariantOptionQualifierWsDTO}
     */
    VariantOptionQualifierWsDTO,

    /**
     * The VariantOptionWsDTO model constructor.
     * @property {module:models/VariantOptionWsDTO}
     */
    VariantOptionWsDTO,

    /**
     * The VariantValueCategoryWsDTO model constructor.
     * @property {module:models/VariantValueCategoryWsDTO}
     */
    VariantValueCategoryWsDTO,

    /**
     * The VoucherListWsDTO model constructor.
     * @property {module:models/VoucherListWsDTO}
     */
    VoucherListWsDTO,

    /**
     * The VoucherWsDTO model constructor.
     * @property {module:models/VoucherWsDTO}
     */
    VoucherWsDTO,

    /**
     * The WeekdayOpeningDayWsDTO model constructor.
     * @property {module:models/WeekdayOpeningDayWsDTO}
     */
    WeekdayOpeningDayWsDTO,

    /**
    * The CardtypesApi service constructor.
    * @property {module:api/CardtypesApi}
    */
    CardtypesApi,

    /**
    * The CatalogsApi service constructor.
    * @property {module:api/CatalogsApi}
    */
    CatalogsApi,

    /**
    * The CurrenciesApi service constructor.
    * @property {module:api/CurrenciesApi}
    */
    CurrenciesApi,

    /**
    * The CustomergroupsApi service constructor.
    * @property {module:api/CustomergroupsApi}
    */
    CustomergroupsApi,

    /**
    * The DeliverycountriesApi service constructor.
    * @property {module:api/DeliverycountriesApi}
    */
    DeliverycountriesApi,

    /**
    * The ExportApi service constructor.
    * @property {module:api/ExportApi}
    */
    ExportApi,

    /**
    * The FeedsApi service constructor.
    * @property {module:api/FeedsApi}
    */
    FeedsApi,

    /**
    * The ForgottenpasswordtokensApi service constructor.
    * @property {module:api/ForgottenpasswordtokensApi}
    */
    ForgottenpasswordtokensApi,

    /**
    * The LanguagesApi service constructor.
    * @property {module:api/LanguagesApi}
    */
    LanguagesApi,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi,

    /**
    * The ProductsApi service constructor.
    * @property {module:api/ProductsApi}
    */
    ProductsApi,

    /**
    * The PromotionsApi service constructor.
    * @property {module:api/PromotionsApi}
    */
    PromotionsApi,

    /**
    * The StoresApi service constructor.
    * @property {module:api/StoresApi}
    */
    StoresApi,

    /**
    * The TitlesApi service constructor.
    * @property {module:api/TitlesApi}
    */
    TitlesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The VouchersApi service constructor.
    * @property {module:api/VouchersApi}
    */
    VouchersApi
}
