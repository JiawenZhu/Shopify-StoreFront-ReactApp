import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Box, Text, Image, Button} from "@chakra-ui/react";

const ProductPage = () => {

  let navigateTo = useNavigate();

  const { addItemToCheckout, product, fetchProductWithHandle } =
    useContext(ShopContext);

  const { handle } = useParams();

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  let color = handle.split('-')[0]

  if (color === 'yellow') {
    color = 'yellow.600'
  }
  if (!product.title) return <div>Loading...</div>;

  return (
    <div>
      <Box align="center">
        <Image src={product.images[0].src} alt={product.title} />
        <Text color={color} fontSize='2xl' spacing={3} as='em'>{product.title}</Text>
        <br />
        <Text fontSize='lg' spacing={3} as='em'>${product.variants[0].price}</Text>
        <br />
        <Button onClick={()=> addItemToCheckout(product.variants[0].id, 1)}>Add to Cart</Button>
      </Box>
    </div>
  );
};

export default ProductPage;
