import { Box, HStack, VStack, Stack, Link, Text, useColorModeValue, SimpleGrid, Badge, Image, Heading, Avatar } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { getTransparentHeaderLayout } from "src/components/Layout";
import { Github } from "lucide-react";
export { getDefaultStaticProps as getStaticProps } from "src/lib/default_static_props";

import data from "../data/team.json";

const Team2 = () => {
	const gridBackgroundColor = useColorModeValue("gray.100", "gray.800");
	const contributorCardBackgroundColor = useColorModeValue("gray.200", "gray.700");

	return (
    <>
		  <Head>
        <title>Who are we - Open Assistant</title>
        <meta name="description" content="The team begind Open Assistant" />
      </Head>
			<Box fontFamily="Inter" p="6" className="oa-basic-theme">
				<Box className="max-w-7xl mx-auto">
					<Stack spacing="6" mb="6">
						<Heading as="h1" size="xl" color="blue.500">
							Who are we?
						</Heading>
						<Text>Open Assistant is only possible through the efforts of these amazing people.</Text>
						{
							data.groups.map(group => (
								<>
									<Box bg={gridBackgroundColor} p="6" pt="4" borderRadius="xl" shadow="base">
										<Text as="h2" fontWeight="bold">{group.name}</Text>
										<SimpleGrid minChildWidth="300px" pt="8px" spacing="15px">
											{
												group.members.map(member => {
													const info = data.people[member] ?? {};
													const { name, title, githubURL, imageURL } = info;
													return (
														<Box bg={contributorCardBackgroundColor} borderRadius="md">
															<HStack p="10px">
																<Avatar src={imageURL} />
																<Stack spacing="5px" pl="10px" width="100%">
																	<Link href={githubURL} isExternal as="b" lineHeight="1em" fontSize="1em" target="_default" rel="noreferrer">
																		<HStack>
																		<Text isTruncated>{name}</Text>																				
																		<Badge ml="10px">
																			<Github size="12px" />
																		</Badge>
																		</HStack>
																	</Link>	
																	<Text noOfLines={1} fontSize="0.8em">{title}</Text>
																</Stack>
															</HStack>	
														</Box>
													);
												})
											}
										</SimpleGrid>
									</Box>
								</>
							))
						}
					</Stack>
				</Box>
      </Box>
    </>
  );
}

Team2.getLayout = getTransparentHeaderLayout;

export default Team2;
