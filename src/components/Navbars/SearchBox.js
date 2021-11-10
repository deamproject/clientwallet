// Chakra Icons
import { BellIcon, SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Box,
  Switch,
  Stack,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react";


export default function SearchBox(props) {

    // Chakra Color Mode 
//   let mainTeal = useColorModeValue("teal.300", "teal.300");
//   let inputBg = useColorModeValue("white", "gray.800");
//   let mainText = useColorModeValue("gray.700", "gray.200");
//   let navbarIcon = useColorModeValue("gray.500", "gray.200");
//   let searchIcon = useColorModeValue("gray.700", "gray.200");

const mainTeal = useColorModeValue("teal.300", "teal.300");
const searchIcon = useColorModeValue("gray.700", "gray.200");
const inputBg = useColorModeValue("gray.50", "gray.800");


let mainText = useColorModeValue("gray.800", "gray.100");



    return (
        <InputGroup
            cursor="pointer"
            bg={inputBg}
            borderRadius= {{sm:"15px", md:"15px"}}
            w={{
                sm: "100%",
                md: "350px",
            }}
            me={{ sm: "auto", md: "20px" }}
            _focus={{
                borderColor: { mainTeal },
            }}
            _active={{
                borderColor: { mainTeal },
            }}
        >
            <InputLeftElement
                children={
                    <IconButton
                        bg="inherit"
                        borderRadius="inherit"
                        _hover="none"
                        _active={{
                            bg: "inherit",
                            transform: "none",
                            borderColor: "transparent",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                        icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
                    ></IconButton>
                }
            />
            <Input
                fontSize="sm"
                py="11px"
                color={mainText}
                placeholder="Search by event name and league"
                borderRadius="inherit"
            />
        </InputGroup>

    )
}