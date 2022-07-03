import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Container,
  Divider,
  Group,
  Navbar,
  Text,
  ScrollArea,
} from "@mantine/core";
import React from "react";
import { firstCol, secondCol } from "./MenuItems";

const Menu = () => {
  return (
    <Navbar.Section grow component={ScrollArea}>
      <Container p="md">
        {firstCol.map((col) => (
          <Group mb={14} key={col.text}>
            <FontAwesomeIcon icon={col.icon} />
            <Text>{col.text}</Text>
          </Group>
        ))}
      </Container>
      <Divider />
      <Text p="md" color="gray">
        SUBSCRIPTIONS
      </Text>
      <Container>
        {secondCol.map((col) => (
          <Group mb={12} key={col.src}>
            <Avatar size="sm" radius="xl" src={col.src} alt={col.src} />
            <Text size="sm">{col.name}</Text>
          </Group>
        ))}
      </Container>
    </Navbar.Section>
  );
};

export default Menu;
