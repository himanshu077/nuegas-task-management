import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function SettingTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [
    { id: 0, label: "General" },
    { id: 1, label: "Notification" }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label=""
        selectionFollowsFocus
      >
        {data.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            iconPosition="start"
            className="!capitalize !text-sm PlusJakartaSans500"
            sx={{
              paddingY: 2.26,
              color: value === tab.id ? "#141522" : "#8E92BC"
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default SettingTabs;
