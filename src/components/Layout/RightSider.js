import { Box, Flex, Heading, Icon, VStack, Avatar, Button, Text, HStack, Divider } from '@chakra-ui/react'
import React from 'react'
import APP_ICONS from '../../config/constants/icons'

const RightSider = () => {
    const peopleToFollow = [
        {
            name: "Alena Gouse",
            username: "alenagouse",
            avatar: "https://i.pravatar.cc/50"
        },
        {
            name: "Alex Jones",
            username: "alexjones",
            avatar: "https://i.pravatar.cc/50"
        },
        {
            name: "John Doe",
            username: "johndoe",
            avatar: "https://i.pravatar.cc/50"
        },
        {
            name: "Jane Doe",
            username: "janedoe",
            avatar: "https://i.pravatar.cc/50"
        }
    ]

    const trends = [
        {
            title: "Be the Peron You Are on Vacation",
            author: "Marent Troff",
            authorAvatar: "https://i.pravatar.cc/50",
        },
        {
            title: "Hate NFTs? I have some bad news for you",
            author: "Zain Levin",
            authorAvatar: "https://i.pravatar.cc/50",
        },
        {
            title: "The 5 Best Places to Eat in Chicago",
            author: "Lindsey Curtis",
            authorAvatar: "https://i.pravatar.cc/50",
        },
    ]

    const topics = [
        "Technology",
        "Design",
        "Culture",
        "Business",
        "Politics",
        "Science",
        "Health",
    ]

    return (
        <Box
            as="aside"
            pos="fixed"
            top="80px"
            right="0"
            w="300px"
            bg="white"
            h="calc(100% - 80px)"
            borderLeft="1px solid #e6e6e6"
            p="20px"
        >
            <VStack spacing={5}>
                <Box w="full">
                    <Flex align="center">
                        <Icon boxSize="5" as={APP_ICONS.people} />
                        <Heading ml={3} size="md" fontSize="16px">People who to follow</Heading>
                    </Flex>

                    <VStack mt={5} spacing={5}>
                        {peopleToFollow.map((item, index) => (
                            <Flex key={index} align="center" w="full" justify="space-between">
                                <Flex>
                                    <Avatar size="sm" src={item.avatar} name={item.name} />
                                    <Text ml={3}>{item.name}</Text>
                                </Flex>
                                <Button rounded="full" size="sm" variant="outline" fontWeight="bold">Follow</Button>
                            </Flex>
                        ))}

                    </VStack>
                </Box>

                <Divider />

                <Box w="full">
                    <Flex align="center">
                        <Icon boxSize="5" as={APP_ICONS.trending} />
                        <Heading ml={3} size="md" fontSize="16px">Today's top trends</Heading>
                    </Flex>

                    <VStack mt={5} spacing={5}>
                        {trends.map((item, index) => (
                            <Box key={index} w="full">
                                <Text fontSize="14px" fontWeight="bold">{item.title}</Text>
                                <Flex align="center">
                                    <Text fontSize="12px" color="gray.400">By</Text>
                                    <Avatar size="xs" src={item.authorAvatar} name={item.author} ml={2} />
                                    <Text fontSize="12px" ml={2}>{item.author}</Text>
                                </Flex>
                            </Box>
                        ))}

                    </VStack>
                </Box>

                <Divider />

                <Box w="full">
                    <Flex align="center">
                        <Icon boxSize="5" as={APP_ICONS.trending} />
                        <Heading ml={3} size="md" fontSize="16px">Topics for you</Heading>
                    </Flex>

                    <HStack flexWrap={"wrap"} mt={5} spacing={1}>
                        {topics.map((item, index) => (
                            <Box mt={1}>
                                <Button my={1} key={index} rounded="full" size="sm" variant="outline" fontWeight="bold">{item}</Button>
                            </Box>
                        ))}

                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default RightSider