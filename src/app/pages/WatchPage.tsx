import { AppShell, Header, Text } from "@mantine/core";
import Topbar from "../components/shared/Topbar";
import Recommendation from "../components/watch/Recommendation";

const WatchPage = () => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Topbar />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      aside={
        <div className="" style={{ marginTop: "10px" }}>
          <Recommendation />
          <Recommendation />
          <Recommendation />
        </div>
      }
    >
      <Text>Hello world</Text>
    </AppShell>
  );
};
export default WatchPage;
