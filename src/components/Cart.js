import React, { useContext, useDisclosure } from "react";
import { ShopContext } from "../context/shopContext";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
const Cart = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  // const btnRef = React.useRef()

  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>shopping cart</DrawerHeader>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={()=> closeCart()}>
              Cancel
            </Button>
            <Button colorScheme="blue">check out</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
