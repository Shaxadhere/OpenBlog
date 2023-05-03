import {
    Flex,
    Icon,
    InputGroup,
    InputLeftAddon,
    Box, Input,
    Avatar,
    Text,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import React from 'react'
import APP_ICONS from '../../config/constants/icons'

const Header = () => {
    return (
        <Flex
            as="header"
            pos="fixed"
            top="0"
            left="100px"
            w="calc(100% - 100px)"
            bg="white"
            h="80px"
            borderBottom="1px solid #e6e6e6"
            alignItems="center"
            px="50px"
            justify="space-between"
        >
            <Box>
                <InputGroup rounded="full">
                    <InputLeftAddon borderColor="gray.300 !important" rounded="full" bg="transparent" borderRight="none" children={<Icon as={APP_ICONS.search} />} />
                    <Input
                        rounded="full"
                        borderLeft="none"
                        placeholder="Search..."
                        borderColor="gray.300 !important"
                        _focus={{
                            boxShadow: "none",
                            // border
                        }}
                        minW="380px"
                    />
                </InputGroup>
            </Box>

            <Flex justify="space-between" align="center" minW="250px">
                <Flex align="center">
                    <Avatar size="sm" />
                    <Text ml="10px" fontWeight="bold">Shehzad Ahmed</Text>
                </Flex>

                <Menu>
                    <MenuButton as={IconButton} icon={<Icon as={APP_ICONS.options} />} variant={"ghost"} >
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Preferences</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}

export default Header