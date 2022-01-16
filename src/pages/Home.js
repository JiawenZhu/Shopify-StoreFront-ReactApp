import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  const firstThreeProducts = products.slice(0, 3);

  const allOtherProducts = products.slice(3);

  if (!products) return <div>loading...</div>;
  return (
    <Box>
      <Grid h="200px" templateColumns="repeat(3, 1fr)">
        {firstThreeProducts.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: "85%" }} textAlign="center">
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <Box h="300px"></Box>
      <Flex flexWrap="wrap" justify="space-between">
        {allOtherProducts.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: "75%"}} textAlign="center" w="300px">
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
