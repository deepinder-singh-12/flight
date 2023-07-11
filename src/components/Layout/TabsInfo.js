import React, { useState } from "react";
import { Tabs, Tab, Container } from "@mui/material";
import CustomTabPanel from "./CustomTabPanel";

const tabsProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabsInfo = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ marginY: "50px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Arrivals" {...tabsProps(0)} />
        <Tab label="Departures" {...tabsProps(1)} />
      </Tabs>

      <CustomTabPanel value={value} index={0} />

      <CustomTabPanel value={value} index={1} />
    </Container>
  );
};

export default TabsInfo;
