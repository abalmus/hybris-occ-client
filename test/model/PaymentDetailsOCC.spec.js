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

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
    // AMD.
        define(['expect.js', '../../src/index'], factory)
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'))
    } else {
    // Browser globals (root is window)
        factory(root.expect, root.Occ)
    }
}(this, (expect, Occ) => {
    'use strict'

    let instance

    beforeEach(() => {
        instance = new Occ.PaymentDetailsOCC()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('PaymentDetailsOCC', () => {
        it('should create an instance of PaymentDetailsOCC', () => {
            // uncomment below and update the code to test PaymentDetailsOCC
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be.a(Occ.PaymentDetailsOCC);
        })

        it('should have the property id (base name: "id")', () => {
            // uncomment below and update the code to test the property id
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property accountHolderName (base name: "accountHolderName")', () => {
            // uncomment below and update the code to test the property accountHolderName
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property cardType (base name: "cardType")', () => {
            // uncomment below and update the code to test the property cardType
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property cardNumber (base name: "cardNumber")', () => {
            // uncomment below and update the code to test the property cardNumber
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property startMonth (base name: "startMonth")', () => {
            // uncomment below and update the code to test the property startMonth
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property startYear (base name: "startYear")', () => {
            // uncomment below and update the code to test the property startYear
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property expiryMonth (base name: "expiryMonth")', () => {
            // uncomment below and update the code to test the property expiryMonth
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property expiryYear (base name: "expiryYear")', () => {
            // uncomment below and update the code to test the property expiryYear
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property issueNumber (base name: "issueNumber")', () => {
            // uncomment below and update the code to test the property issueNumber
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property subscriptionId (base name: "subscriptionId")', () => {
            // uncomment below and update the code to test the property subscriptionId
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property saved (base name: "saved")', () => {
            // uncomment below and update the code to test the property saved
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

        it('should have the property billingAddress (base name: "billingAddress")', () => {
            // uncomment below and update the code to test the property billingAddress
            // var instane = new Occ.PaymentDetailsOCC();
            // expect(instance).to.be();
        })

    })

}))
