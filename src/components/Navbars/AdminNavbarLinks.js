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
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import WalletConnectButton from "components/Wallet/WalletConnectButton";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";

import AccountModal from "components/Wallet/AccountModal";
import DarkLightSwitch from "./DarkLightSwitch";
import SearchBox from "./SearchBox";


export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, logoText, onOpen, ...rest } = props;


  const [isOpenWallet, setIsOpenWallet] = React.useState(false)
  const onOpenWallet = () => setIsOpenWallet(true)
  const onCloseWallet = () => setIsOpenWallet(false)

  // Chakra Color Mode
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");



  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();

  return (

    <Flex
      pe={{ sm: "0px", md: "16px" }}
      pl={{sm: "16px"}}

      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
    >


    <Box position="fixed" top={props.scrolled ? "15px" : "25px"} left="30px">
      <SidebarResponsive
        logoText={logoText}
        secondary={secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
      </Box>

      <Box w="50px">
      </Box>

      <Box display={{ sm: "none", md: "flex" }}>
         <SearchBox/>
      </Box>


      <Box display={{ sm: "none", xl: "flex" }}>
        {!props.scrolled && (
          <DarkLightSwitch mr="20px" />
        )}
      </Box>



      {/* <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        w="24px"
        h="24px"
      /> */}

      {/* <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="13 minutes ago"
                info="from Alicia"
                boldInfo="New Message"
                aName="Alicia"
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="2 days ago"
                info="by Josh Henry"
                boldInfo="New Album"
                aName="Josh Henry"
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="3 days ago"
                info="Payment succesfully completed!"
                boldInfo=""
                aName="Kara"
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu> */}

      <WalletConnectButton handleOpenModal={onOpenWallet} />
      <AccountModal isOpen={isOpenWallet} onClose={onCloseWallet} />

    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
