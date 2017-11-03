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

import expect from 'expect.js'
import Occ from '../config'
import {requestAccessToken, clearAccessToken} from '../utils'

let instance

const {user, address, titles, sampleProduct, authentication} = Occ
const entryNumber = 0
let addressId
let cartId
let orderEntry

before((done) => {
    requestAccessToken(Occ.ApiClient.instance, authentication)
        .then(done)
})

after(() => {
    clearAccessToken(Occ.ApiClient.instance)
})

beforeEach(() => {
    instance = new Occ.UsersApi()
})

afterEach(() => {
    instance = new Occ.UsersApi()
})

describe('UsersApi', () => {
    // create user
    describe('postUsers', () => {
        it('should call postUsers successfully', (done) => {
            instance.postUsers(user)
                .then(done)
                .catch((err) => {
                    const error = JSON.parse(err.response.text).errors[0].type
                    if (error === 'DuplicateUidError') { done() }
                })
        })
    })

    // post user address
    describe('postUserAddress', () => {
        it('should call postUserAddress successfully', (done) => {
            instance.postUserAddress(user.uid, address)
                .then((res) => {
                    expect(res.firstName).to.equal(user.firstName)
                    done()
                })
        })
    })

    // verify user address
    describe('postUserAddressesVerification', () => {
        it('should call postUserAddressesVerification successfully', (done) => {
            instance.postUserAddressesVerification(user.uid, address)
                .then(() => done())
        })
    })

    // get user address
    describe('getUserAddresses', () => {
        it('should call getUserAddresses successfully', (done) => {
            instance.getUserAddresses(user.uid)
                .then((res) => {
                    expect(res).to.have.property('addresses')
                    addressId = res.addresses[0].id
                    done()
                })
        })
    })

    // GET
    describe('getUserAddress', () => {
        it('should call getUserAddress successfully', (done) => {
            instance.getUserAddress(user.uid, addressId)
                .then((res) => {
                    expect(res.id).to.be.equal(addressId)
                    done()
                })
        })
    })

    // PUT
    describe('putUserAddress', () => {
        it('should call putUserAddress successfully', (done) => {
            address.line2 = 'PUT'
            instance.putUserAddress(user.uid, addressId, address)
                .then(() => instance.getUserAddress(user.uid, addressId))
                .then((res) => {
                    expect(res.line2).to.equal('PUT')
                    done()
                })
        })
    })

    // PATCH
    describe('patchUserAddress', () => {
        it('should call patchUserAddress successfully', (done) => {
            address.line2 = 'PATCH'
            instance.patchUserAddress(user.uid, addressId, {line2: 'PATCH'})
                .then(() => instance.getUserAddress(user.uid, addressId))
                .then((res) => {
                    expect(res.line2).to.equal('PATCH')
                    done()
                })
        })
    })

    // GET
    describe('getUser', () => {
        it('should call getUser successfully', (done) => {
            instance.getUser(user.uid)
                .then((res) => {
                    expect(res.uid).to.equal(user.uid)
                    done()
                })
        })
    })

    // PUT
    describe('putUser', () => {
        it('should call putUser successfully', (done) => {
            user.titleCode = titles[1].code
            instance.putUser(user.uid, user)
                .then(() => instance.getUser(user.uid))
                .then((res) => {
                    expect(res.titleCode).to.equal(titles[1].code)
                    done()
                })
        })
    })

    // PATCH
    describe('patchUser', () => {
        it('should call patchUser successfully', (done) => {
            instance.patchUser(user.uid, {titleCode: titles[2].code})
                .then(() => instance.getUser(user.uid))
                .then((res) => {
                    expect(res.titleCode).to.equal(titles[2].code)
                    done()
                })
        })
    })

    // POST, create cart by user id
    describe('postCart', () => {
        it('should call postCart successfully', (done) => {
            instance.postCart(user.uid)
                .then((res) => {
                    expect(res).to.have.property('code')
                    cartId = res.code
                    done()
                })
        })
    })

    // POST, add entries to the cart
    describe('postCartEntries', () => {
        it('should call postCartEntries successfully', (done) => {
            instance.postCartEntries(user.uid,
                cartId,
                {product: {code: sampleProduct.code}, qty: 1}
            )
                .then((res) => {
                    expect(res.quantity).to.equal(1)
                    done()
                })
        })
    })

    // GET, entries in the cart
    describe('getCartEntries', () => {
        it('should call getCartEntries successfully', (done) => {
            instance.getCartEntries(user.uid, cartId)
                .then((res) => {
                    expect(res.orderEntries[entryNumber].product.code).to.equal(sampleProduct.code)
                    orderEntry = res.orderEntries[entryNumber]
                    done()
                })
        })
    })

    // GET, entry details
    describe('getCartEntry', () => {
        it('should call getCartEntry successfully', (done) => {
            instance.getCartEntry(user.uid, cartId, entryNumber)
                .then((res) => {
                    expect(res).to.eql(orderEntry)
                    done()
                })
        })
    })

    // PUT, update entry, clear fields that is not in req body
    describe('putCartEntry', () => {
        it('should call putCartEntry successfully', (done) => {
            const updatedQuantity = 2
            orderEntry.quantity = updatedQuantity
            instance.putCartEntry(user.uid, cartId, entryNumber, orderEntry)
                .then((res) => {
                    expect(res.quantity).to.equal(updatedQuantity)
                    done()
                })
        })
    })

    // PATCH, update entry with certain fields
    describe('patchCartEntry', () => {
        it('should call patchCartEntry successfully', (done) => {
            const updatedQuantity = 3
            instance.patchCartEntry(user.uid, cartId, entryNumber, {quantity: 3})
                .then((res) => {
                    expect(res.quantity).to.equal(updatedQuantity)
                    done()
                })
        })
    })

    // POST apply voucher
    describe('postCartVoucher', () => {
        it('should call postCartVoucher successfully', (done) => {
            instance.postCartVoucher(user.uid, cartId, 'MAGIC')
                .then(done)
        })
    })

    // GET applied voucher
    describe('getCartVouchers', () => {
        it('should call getCartVouchers successfully', (done) => {
            instance.getCartVouchers(user.uid, cartId)
                .then((res) => {
                    expect(res).to.have.property('vouchers')
                    done()
                })
        })
    })

    // DELETE apply voucher
    describe('deleteCartVouchers', () => {
        it('should call deleteCartVouchers successfully', (done) => {
            instance.deleteCartVouchers(user.uid, cartId, 'MAGIC')
                .then(done)
        })
    })

    // // PUT Assigns an email to the guest cart
    // describe('putCartEmail', function() {
    //   it('should call putCartEmail successfully', function(done) {
    //     instance.putCartEmail(user.uid, cartId, {email: user.uid})
    //       .then((res) => {
    //         console.log(res)
    //         // expect(res).to.have.property('deliveryCost')
    //         // expect(res.code).to.equal('standard-gross')
    //         done();
    //       })
    //   });
    // });

    // GET, all carts by user id
    describe('getCarts', () => {
        it('should call getCarts successfully', (done) => {
            instance.getCarts(user.uid)
                .then((res) => {
                    expect(res.carts[0].code).to.equal(cartId)
                    done()
                })
        })
    })

    // GET, cart by user id and cart id
    describe('getCart', () => {
        it('should call getCart successfully', (done) => {
            instance.getCart(user.uid, cartId)
                .then((res) => {
                    expect(res.code).to.equal(cartId)
                    done()
                })
        })
    })

    describe('patchCartFlagForDeletion', () => {
        it('should call patchCartFlagForDeletion successfully', (done) => {
            instance.patchCartFlagForDeletion(user.uid, cartId)
                .then((res) => {
                    expect(res).to.have.property('savedCartData')
                    done()
                })
        })
    })

    // POST create and assign delivery address to cart
    describe('postCartDeliveryAddress', () => {
        it('should call postCartDeliveryAddress successfully', (done) => {
            instance.postCartDeliveryAddress(user.uid, cartId, address)
                .then((res) => {
                    expect(res.firstName).to.equal(user.firstName)
                    done()
                })
        })
    })

    // GET all delivery modes for cart
    describe('getCartDeliveryModes', () => {
        it('should call getCartDeliveryModes successfully', (done) => {
            instance.getCartDeliveryModes(user.uid, cartId)
                .then((res) => {
                    expect(res).to.have.property('deliveryModes')
                    done()
                })
        })
    })

    // PUT set delivery mode to cart
    describe('putCartDeliveryMode', () => {
        it('should call putCartDeliveryMode successfully', (done) => {
            instance.putCartDeliveryMode(user.uid, cartId, 'standard-gross')
                .then(done)
                .catch((err) => console.log(err))
        })
    })

    // GET selected delivery mode of cart
    describe('getCartDeliveryMode', () => {
        it('should call getCartDeliveryMode successfully', (done) => {
            instance.getCartDeliveryMode(user.uid, cartId)
                .then((res) => {
                    expect(res).to.have.property('deliveryCost')
                    expect(res.code).to.equal('standard-gross')
                    done()
                })
        })
    })

    // PUT assign delivery address to cart
    describe('putCartDeliveryAddress', () => {
        it('should call putCartDeliveryAddress successfully', (done) => {
            instance.putCartDeliveryAddress(user.uid, cartId, addressId)
                .then(done)
                .catch((err) => console.log(err))
        })
    })

    describe('getCartPromotions', () => {
        it('should call getCartPromotions successfully', (done) => {
            instance.getCartPromotions(user.uid, cartId)
                .then((res) => {
                    expect(res).to.have.property('promotions')
                    done()
                })
                .catch((err) => console.log(err))
        })
    })

    // // POST new credit card add to cart
    // // payment info is invalid?
    // describe('postCartPaymentDetail', function() {
    //   it('should call postCartPaymentDetail successfully', function(done) {
    //     console.log(payment)
    //     instance.postCartPaymentDetail(user.uid, cartId, payment)
    //       .then((res) => {
    //         console.log(res)
    //         expect(res.quantity).to.equal(updatedQuantity)
    //         done();
    //       })
    //       .catch((err)=>console.log(err))
    //   });
    // });

    // // PUT set payment details
    // describe('putCartPaymentDetail', function() {
    //   it('should call putCartPaymentDetail successfully', function(done) {
    //     //uncomment below and update the code to test putCartPaymentDetail
    //     //instance.putCartPaymentDetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });

    // // POST post order
    // describe('postOrder', function() {
    //   it('should call postOrder successfully', function(done) {
    //     //uncomment below and update the code to test postOrder
    //     //instance.postOrder(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     instance.postOrder(user.uid, cartId, {securityCode: payment.securityCode})
    //       .then((res) => {
    //         console.log(res)
    //         // expect(res).to.have.property('orders')
    //         done();
    //       })
    //       .catch((err)=>console.log(err))
    //   });
    // });

    // GET user order history
    describe('getOrders', () => {
        it('should call getOrders successfully', (done) => {
            instance.getOrders(user.uid)
                .then((res) => {
                    expect(res).to.have.property('orders')
                    done()
                })
                .catch((err) => console.log(err))
        })
    })

    // // GET order detail
    // describe('getOrder', function() {
    //   it('should call getOrder successfully', function(done) {
    //     //uncomment below and update the code to test getOrder
    //     //instance.getOrder(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });

    // DELETE, delete cart entry
    describe('deleteCartEntry', () => {
        it('should call deleteCartEntry successfully', (done) => {
            instance.deleteCartEntry(user.uid, cartId, entryNumber)
                .then(done)
        })
    })

    // DELETE delivery address from cart
    describe('deleteCartDeliveryAddress', () => {
        it('should call deleteCartDeliveryAddress successfully', (done) => {
            instance.deleteCartDeliveryAddress(user.uid, cartId)
                .then(done)
        })
    })

    // // POST clone a cart
    // // TODO: fix 'cannot clone a saved cart'
    // describe('postCartCloneSavedcart', function() {
    //   it('should call postCartCloneSavedcart successfully', function(done) {
    //     instance.postCartCloneSavedcart(user.uid, '00002110')
    //       .then((res) => {
    //         console.log(res)
    //         console.log(cartId)
    //         // expect(res.firstName).to.equal(user.firstName)
    //         done();
    //       })
    //       .catch((err)=>console.log(err))
    //   });
    // });

    // DELETE cart delivery mode
    describe('deleteCartDeliveryMode', () => {
        it('should call deleteCartDeliveryMode successfully', (done) => {
            instance.deleteCartDeliveryMode(user.uid, cartId)
                .then(done)
        })
    })

    // DELETE cart
    describe('deleteCart', () => {
        it('should call deleteCart successfully', (done) => {
            instance.deleteCart(user.uid, cartId)
                .then(done)
        })
    })

    // DELETE user address by address id
    describe('deleteUserAddress', () => {
        it('should call deleteUserAddress successfully', (done) => {
            instance.deleteUserAddress(user.uid, addressId)
                .then(() => instance.getUserAddress(user.uid, addressId))
                .catch((err) => {
                    const message = `Address with given id: '${addressId}' doesn't exist or belong to another user`
                    if (JSON.parse(err.response.text).errors[0].message === message) { done() }
                })
        })
    })

    // PUT update user password
    describe('putPassword', () => {
        it('should call putPassword successfully', (done) => {
            instance.putPassword(user.uid, {_new: user.password, old: `${user.password}!`})
                .then(done)
        })
    })

    // DELETE user by user if
    describe('deleteUser', () => {
        it('should call deleteUser successfully', (done) => {
            // delete user will not remove the record
            // it will only suspend the account!
            instance.deleteUser(user.uid)
                .then(done)
        })
    })

    describe('postCartPromotion', () => {
        it('should call postCartPromotion successfully', (done) => {
            // uncomment below and update the code to test postCartPromotion
            // instance.postCartPromotion(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })
    describe('getCartPromotion', () => {
        it('should call getCartPromotion successfully', (done) => {
            // uncomment below and update the code to test getCartPromotion
            // instance.getCartPromotion(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })
    describe('deleteCartPromotion', () => {
        it('should call deleteCartPromotion successfully', (done) => {
            // uncomment below and update the code to test deleteCartPromotion
            // instance.deleteCartPromotion(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })
    describe('patchCartRestoreSavedCart', () => {
        it('should call patchCartRestoreSavedCart successfully', (done) => {
            // uncomment below and update the code to test patchCartRestoreSavedCart
            // instance.patchCartRestoreSavedCart(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })
    describe('patchSavedCart', () => {
        it('should call patchSavedCart successfully', (done) => {
            // uncomment below and update the code to test patchSavedCart
            // instance.patchSavedCart(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })
    describe('getSavedCart', () => {
        it('should call getSavedCart successfully', (done) => {
            // uncomment below and update the code to test getSavedCart
            // instance.getSavedCart(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })

    describe('getCustomerGroups', () => {
        it('should call getCustomerGroups successfully', (done) => {
            // uncomment below and update the code to test getCustomerGroups
            // instance.getCustomerGroups(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })
    describe('putLogin', () => {
        it('should call putLogin successfully', (done) => {
            // uncomment below and update the code to test putLogin
            // instance.putLogin(function(error) {
            //  if (error) throw error;
            // expect().to.be();
            // });
            done()
        })
    })

    // describe('getPaymentDetail', function() {
    //   it('should call getPaymentDetail successfully', function(done) {
    //     //uncomment below and update the code to test getPaymentDetail
    //     //instance.getPaymentDetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('putPaymentDetail', function() {
    //   it('should call putPaymentDetail successfully', function(done) {
    //     //uncomment below and update the code to test putPaymentDetail
    //     //instance.putPaymentDetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('patchPaymentDetail', function() {
    //   it('should call patchPaymentDetail successfully', function(done) {
    //     //uncomment below and update the code to test patchPaymentDetail
    //     //instance.patchPaymentDetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('deletePaymentDetail', function() {
    //   it('should call deletePaymentDetail successfully', function(done) {
    //     //uncomment below and update the code to test deletePaymentDetail
    //     //instance.deletePaymentDetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('getPaymentDetails', function() {
    //   it('should call getPaymentDetails successfully', function(done) {
    //     //uncomment below and update the code to test getPaymentDetails
    //     //instance.getPaymentDetails(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
})
