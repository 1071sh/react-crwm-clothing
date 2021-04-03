import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckout from "../../components/stripe-button/stripe-button.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import {
    CheckoutPageContainer,
    CheckoutHeader,
    CheckoutHeaderBlock,
    CheckoutTotal,
    TestWarning,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <CheckoutTotal>TOTAL: ${total}</CheckoutTotal>
            <TestWarning>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </TestWarning>
            <StripeCheckout price={total} />
        </CheckoutPageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
