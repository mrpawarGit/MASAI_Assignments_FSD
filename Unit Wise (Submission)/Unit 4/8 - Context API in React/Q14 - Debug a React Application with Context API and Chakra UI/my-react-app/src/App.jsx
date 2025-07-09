import { ChakraProvider, Box, Flex, Grid, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./components/AuthContext";
import { ThemeContext } from "./components/ThemeContext";

function AppContent() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <Box
      bg={isLight ? "gray.50" : "gray.800"}
      minH="100vh"
      color={isLight ? "black" : "white"}
    >
      <Flex
        as="nav"
        p="4"
        bg={isLight ? "gray.100" : "gray.700"}
        justifyContent="space-between"
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {isLight ? "Dark" : "Light"} Theme
        </Button>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap="4"
        p="4"
      >
        {["Card 1", "Card 2", "Card 3"].map((card) => (
          <Box
            key={card}
            p="4"
            shadow="md"
            bg={isLight ? "gray.200" : "gray.600"}
            borderRadius="md"
          >
            {card}
          </Box>
        ))}
      </Grid>

      <Box
        as="footer"
        p="4"
        bg={isLight ? "gray.300" : "gray.700"}
        textAlign="center"
      >
        Footer Content
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <AppContent />
    </ChakraProvider>
  );
}

export default App;
