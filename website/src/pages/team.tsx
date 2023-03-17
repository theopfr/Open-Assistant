export { getDefaultStaticProps as getStaticProps } from "src/lib/default_static_props";
import { Avatar, Badge, Box, Card, CardBody, Flex, Grid, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Github } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { getTransparentHeaderLayout } from "src/components/Layout";

import data from "../data/team.json";

const Team = () => {
	const gridBackgroundColor = useColorModeValue("gray.100", "gray.800");
	const contributorCardBackgroundColor = useColorModeValue("gray.200", "gray.700");

  const { groups, people } = data;
  return (
    <>
      <Head>
        <title>Who are we - Open Assistant</title>
        <meta name="description" content="The team begind Open Assistant" />
      </Head>
      <Box fontFamily="Inter" p="6" className="oa-basic-theme">
        <Box className="max-w-7xl mx-auto">
          <Card bg={gridBackgroundColor}>
            <CardBody display="flex" flexDirection={"column"} gap={4}>
              <Heading as="h1" size="xl" color="blue.500">
                Who are we?
              </Heading>
              <Text>Open Assistant is only possible through the efforts of these amazing people</Text>
              {groups.map((group) => (
                <>
                  <Text as="h2" fontWeight="bold" size="lg">
                    {group.name}
                  </Text>
                  <Grid gap={4} gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
                    {group.members.map((id) => {
                      const info = people[id] ?? {};
                      const { name, title, githubURL, imageURL } = info;
                      return (
                        <Flex key={id} gap={2} bg={contributorCardBackgroundColor} borderRadius="md" p="10px">
                          <Avatar src={imageURL} />
                          <Box ml="3">
                            <Text fontWeight="bold">
                              {name}
                              <Badge ml="1">
                                <Link href={githubURL} target="_default" rel="noreferrer" title="github">
                                  <Github size={12} />
                                </Link>
                              </Badge>
                            </Text>
                            <Text fontSize="sm">{title}</Text>
                          </Box>
                        </Flex>
                      );
                    })}
                  </Grid>
                </>
              ))}
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
};

Team.getLayout = getTransparentHeaderLayout;

export default Team;