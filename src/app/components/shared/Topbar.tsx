import {
  faMicrophone,
  faSearch,
  faBell,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Center, Group, TextInput, Text } from "@mantine/core";
import { useState } from "react";

const Topbar = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <Group style={{ width: "100%" }} position="apart">
      <Text>Videogod</Text>
      <Center>
        <TextInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "500px",
            minWidth: "200px",
          }}
          rightSection={
            <FontAwesomeIcon
              onClick={() => setSearch("")}
              color="gray"
              icon={faSearch}
            />
          }
          icon={
            search.length > 0 && (
              <FontAwesomeIcon icon={faTimes} onClick={() => setSearch("")} />
            )
          }
          mr={8}
        />
        <FontAwesomeIcon result="xl" size="lg" icon={faMicrophone} />
      </Center>
      <Group>
        <FontAwesomeIcon size="lg" icon={faBell} />
        <Avatar
          ml={10}
          size="sm"
          radius="xl"
          src="/images/cliff.avif"
          alt="account"
        />
      </Group>
    </Group>
  );
};

export default Topbar;
