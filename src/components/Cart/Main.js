import { Drawer } from "@material-ui/core";
import { useState } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import styled from "styled-components/macro";
import { Wrapper, StyledButton } from "./App.styles";

import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

const DrawerCart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        {/* <Cart
        cartItems={cartItems}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
      /> */}
        Hello
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
    </div>
  );
};

export default DrawerCart;
