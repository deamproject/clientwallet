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
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

import { FaWallet } from "react-icons/fa";



export default function WalletConnectButton({handleOpenModal}) {
  const { activateBrowserWallet, account} = useEthers()
  const userBalance = useEtherBalance(account)

  function handleConnectWallet() {
    activateBrowserWallet( (error) => {
      if (error)
      {
        alert("No provider found! Please install Metamask on your browser.");
      }
    });
  }

  let balanceBG = useColorModeValue("white", "black")
  let balanceColor = useColorModeValue("pink.500", "pink.400")

  let BNBColor = useColorModeValue("#555", "#aaa")

  let addressBG = useColorModeValue("green.50", "gray.800")
  let addressColor = useColorModeValue("green.600", "green.200")

  let addressBGHover = useColorModeValue("green.500", "green.500")
  let addressColorHover = useColorModeValue("green.50", "green.50")



  return (
    account ? (
      <Box
        display="flex"
        alignItems="center"
        background={balanceBG}
        borderRadius="xl"
        py="0"
      >
        <Box px="3">
          <Text color={balanceColor} fontSize="lg" fontWeight="700">
            {userBalance && parseFloat(formatEther(userBalance)).toFixed(3)}
             <span style={{fontWeight:"500", fontSize:"0.9rem", color:BNBColor}}> BNB  </span>
          </Text>
        </Box>
        <Button
          onClick={handleOpenModal}
          bg={addressBG}
          border="1px solid transparent"
          color={addressColor}
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: {addressBGHover},
            backgroundColor: {addressBGHover},
            color: {addressColorHover}
          }}
          borderRadius="xl"
          m="1px"
          px={3}
          height="38px"
        >
          <Text padding="5px" fontSize="sm" fontWeight="medium" mr="2">
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </Text>
          <Icon as={FaWallet}/>
        </Button>
      </Box>
    ) : (
      <Button colorScheme="teal" size="md" variant="outline" paddingTop="1px" onClick={handleConnectWallet} display={{ sm: "flex", md: "flex" }}>Connect Wallet</Button>
    )
  )
}