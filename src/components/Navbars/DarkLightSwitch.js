import { MoonIcon, SunIcon } from "@chakra-ui/icons";
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
    useColorMode,
} from "@chakra-ui/react";
import { darkModeAtom } from "atoms/darkModeAtom";

import { useAtom } from 'jotai'

import { useEffect } from "react";




export default function DarkLightSwitch(props) {

    const { colorMode, toggleColorMode } = useColorMode()

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    const toggleMode = (event) => {
        setDarkMode(event.target.checked)
    }


    useEffect(() => {
        if (
            (colorMode === "dark" && !darkMode) ||
            (colorMode === "light" && darkMode)
        ) {
            toggleColorMode();
        }

    }, [darkMode])


    return (
        <Box pl={props.ml ?? '0px'} pr={props.mr ?? '0px'}>
            <Stack direction="row">
                <SunIcon w={5} h={5} color={darkMode ? "#777" : "yellow.500"} />
                <Switch colorScheme="teal" size="md" isChecked={darkMode} onChange={toggleMode} />
                <MoonIcon w={5} h={5} color={!darkMode ? "#bbb" : "teal.200"} />
            </Stack>
        </Box>
    )
}


