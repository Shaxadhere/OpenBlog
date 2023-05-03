import { Box } from '@chakra-ui/react'
import React from 'react'
import Sider from './Sider'
import Header from './Header'
import RightSider from './RightSider'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Box>
            <Sider />
            <Header />
            <Box
                as="main"
                pos="fixed"
                top="80px"
                left="100px"
                w="calc(100% - 400px)"
                bg="white"
                h="calc(100% - 80px)"
                p="35px"
                overflow={"auto"}
            >
                <Outlet />
            </Box>
            <RightSider />
        </Box>
    )
}

export default Layout