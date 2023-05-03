import { Box, Flex, Icon, IconButton, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import APP_IMAGES from '../../config/constants/images'
import APP_ICONS from '../../config/constants/icons'

const Sider = () => {

    const menuItems = [
        {
            icon: APP_ICONS.home,
            label: "Home",
            path: "/"
        },
        {
            icon: APP_ICONS.bell,
            label: "Notifications",
            path: "/notifications"
        },
        {
            icon: APP_ICONS.browse,
            label: "Explore",
            path: "/explore"
        },
        {
            icon: APP_ICONS.saved,
            label: "Bookmarks",
            path: "/bookmarks"
        },
        {
            icon: APP_ICONS.hashtag,
            label: "Lists",
            path: "/lists"
        },
    ]

    return (
        <Flex
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            w="100px"
            h="full"
            bg="white"
            flexDir="column"
            align="center"
            justify="space-between"
            p="15px"
            borderRight="1px solid #e6e6e6"
        >
            <Box w="65px" h="65px">
                <Image src={APP_IMAGES.LOGO} w="full" h="full" />
            </Box>

            <VStack alignItems="center" spacing={10} align="stretch" w="full">
                {menuItems.map((item, index) => (
                    <IconButton
                        _hover={{
                            bg:"#000",
                            color:"#fff"
                        }}
                        h="48px"
                        w="48px"
                        key={index}
                        icon={<Icon boxSize="5" as={item.icon} />}
                        aria-label={item.label}
                        variant="ghost"
                    />
                ))}
            </VStack>

            <Box />

        </Flex>
    )
}

export default Sider