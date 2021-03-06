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
        instance = new Occ.Voucher()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('Voucher', () => {
        it('should create an instance of Voucher', () => {
            // uncomment below and update the code to test Voucher
            // var instane = new Occ.Voucher();
            // expect(instance).to.be.a(Occ.Voucher);
        })

        it('should have the property code (base name: "code")', () => {
            // uncomment below and update the code to test the property code
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property voucherCode (base name: "voucherCode")', () => {
            // uncomment below and update the code to test the property voucherCode
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
            // uncomment below and update the code to test the property name
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property description (base name: "description")', () => {
            // uncomment below and update the code to test the property description
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property value (base name: "value")', () => {
            // uncomment below and update the code to test the property value
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property valueFormatted (base name: "valueFormatted")', () => {
            // uncomment below and update the code to test the property valueFormatted
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property valueString (base name: "valueString")', () => {
            // uncomment below and update the code to test the property valueString
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property freeShipping (base name: "freeShipping")', () => {
            // uncomment below and update the code to test the property freeShipping
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property currency (base name: "currency")', () => {
            // uncomment below and update the code to test the property currency
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

        it('should have the property appliedValue (base name: "appliedValue")', () => {
            // uncomment below and update the code to test the property appliedValue
            // var instane = new Occ.Voucher();
            // expect(instance).to.be();
        })

    })

}))
