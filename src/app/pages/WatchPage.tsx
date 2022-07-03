import { AppShell, Header } from "@mantine/core";
import Topbar from "../components/shared/Topbar";

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
    >
      {/* Your application here */}
    </AppShell>
  );
};
export default WatchPage;
