import { Box, Flex, Image, SimpleGrid, VStack, Heading, Avatar, Text, Divider, Button, HStack } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
    const posts = [
        {
            title: "How To Do Your Own Research",
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
            image: "https://learn.swyftx.com/wp-content/uploads/2022/06/DYOR-1-800x533.png",
            author: "Shehzad Ahmed",
            authorAvatar: "https://i.pravatar.cc/50",
        },
        {
            title: "How To Do Your Own Research",
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
            image: "https://learn.swyftx.com/wp-content/uploads/2022/06/DYOR-1-800x533.png",
            author: "Shehzad Ahmed",
            authorAvatar: "https://i.pravatar.cc/50",
        },
        {
            title: "How To Do Your Own Research",
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
            image: "https://learn.swyftx.com/wp-content/uploads/2022/06/DYOR-1-800x533.png",
            author: "Shehzad Ahmed",
            authorAvatar: "https://i.pravatar.cc/50",
        },
        {
            title: "How To Do Your Own Research",
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
            image: "https://learn.swyftx.com/wp-content/uploads/2022/06/DYOR-1-800x533.png",
            author: "Shehzad Ahmed",
            authorAvatar: "https://i.pravatar.cc/50",
        },

    ]

    const topics = [
        "For You",
        "Following",
        "Popular",
        "New"
    ]

    return (
        <VStack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {posts.map((item, index) => (
                    <Box key={index}>
                        <Flex align="center">
                            <Image w="165px" h="165px" src={item.image} />
                            <Box ml={5}>
                                <Heading as="h2" fontSize="16px">
                                    {item.title}
                                </Heading>
                                <Text noOfLines={3}>{item.text}</Text>
                                <Flex align="center">
                                    <Avatar size="xs" src={item.authorAvatar} name={item.author} />
                                    <Text fontSize="12px" ml={2}>{item.author}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>

            <Divider />

            <Box w="full">
                <HStack flexWrap={"wrap"} spacing={1}>
                    {topics.map((item, index) => (
                        <Box key={index} >
                            <Button rounded="full" size="sm" variant="outline" fontWeight="bold">{item}</Button>
                        </Box>
                    ))}
                </HStack>

                <VStack mt={5} spacing={5}>
                    {posts.map((item, index) => (
                        <Box key={index} w="full">
                            <Flex align="center">
                                <Image w="165px" h="165px" src={item.image} />
                                <Box ml={5}>
                                    <Heading as="h2" fontSize="16px">
                                        {item.title}
                                    </Heading>
                                    <Text>{item.text}</Text>
                                    <Flex align="center">
                                        <Avatar size="xs" src={item.authorAvatar} name={item.author} />
                                        <Text fontSize="12px" ml={2}>{item.author}</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </VStack>

            </Box>
        </VStack>
    )
}

export default Home