import {
  AppShell,
  Burger,
  Grid,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Menu from "../components/Home/Menu";
import Topbar from "../components/shared/Topbar";
import VideoCard from "../components/Home/VideoCard";
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function HomePage() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          // p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 150, lg: 200 }}
        >
          <Menu />
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Topbar />
          </div>
        </Header>
      }
    >
      <Grid pl={20} gutter="xl">
        {hex.map((x) => (
          <Grid.Col key={x} m={5} span={2}>
            <VideoCard />
          </Grid.Col>
        ))}
      </Grid>
    </AppShell>
  );
}
