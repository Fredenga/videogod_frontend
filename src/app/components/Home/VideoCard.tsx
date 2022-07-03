import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, Center, Image, Text } from "@mantine/core";
import React from "react";
import styled from "styled-components";

const Time = styled.span`
  position: absolute;
  color: white;
  background-color: #000;
  font-size: small;
  right: 2%;
  bottom: 2%;
`;
const Container = styled.div`
  position: relative;
`;

const VideoCard = () => {
  return (
    <Card style={{ width: "200px", cursor: "pointer" }} p="lg" radius={0}>
      <Card.Section>
        <Container>
          <Image src="/images/bird.avif" alt="thumbnail" />
          <Time>24:00</Time>
        </Container>
      </Card.Section>
      <Card.Section mt={5}>
        <Center>
          <Avatar
            size="sm"
            radius="xl"
            src="/images/cliff.avif"
            alt="channel"
            mr={8}
          />
          <Text>From The Makers of Planet Earth</Text>
        </Center>
      </Card.Section>
      <Card.Section>
        <Text color="gray" size="sm" pl={33}>
          Hello Mr World
        </Text>
      </Card.Section>
      <Card.Section>
        <Center>
          <Text color="gray" size="sm" pl={12} mr={5}>
            10M views
          </Text>
          <FontAwesomeIcon color="gray" size="xs" icon={faDotCircle} />
          <Text color="gray" size="sm" ml={5}>
            7 days ago
          </Text>
        </Center>
      </Card.Section>
    </Card>
  );
};

export default VideoCard;
