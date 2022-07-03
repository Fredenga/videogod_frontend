import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Center, Group, Input, Text } from "@mantine/core";

const Topbar = () => {
  return (
    <Group>
      <Text>Videogod</Text>
      <Center>
        <Input
          rightSection={<FontAwesomeIcon color="gray" icon={faSearch} />}
          mr={8}
        />
        <FontAwesomeIcon result="xl" size="lg" icon={faMicrophone} />
      </Center>
      <Group></Group>
    </Group>
  );
};

export default Topbar;
