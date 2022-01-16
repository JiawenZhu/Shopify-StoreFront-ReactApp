import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Flex, Text, Button, Icon, Image} from "@chakra-ui/react";
import {MdMenu, MdShoppingCart} from "react-icons/md"
const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <Flex backgroundColor="#FBC5CE" flexDir="row" justifyContent="space-between" p="2rem">
      <Icon fill="white" cursor="pointer" as={MdMenu} h={30} w={30}></Icon>
      <Image src="https://apis3.fantuan.ca/image/publicimage_image_1631291214.7803378.jpg" h="100px"></Image>
      <Icon fill="white" cursor="pointer" as={MdShoppingCart} h={30} w={30}
      onClick={()=> openCart()}></Icon>
    </Flex>
  );
};

export default NavBar;
