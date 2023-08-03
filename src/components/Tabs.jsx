import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardTab from "./TabCard";
import { useTranslation } from "react-i18next";
import { Grid, Stack } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Stack>{children}</Stack>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [t, i18n] = useTranslation("global");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Web design" {...a11yProps(0)} />
          <Tab label="Turnkey website" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardTab
              title={"DELSIS CANADA"}
              image={
                "https://webline.uz/storage/images/120295e4879946a8bef33075a8fb3c0f.webp"
              }
              number={"05"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardTab
              title={"Joël A. Prévost"}
              image={
                "https://webline.uz/storage/images/53e405dd00a04759ab8a517a8004f656.webp"
              }
              number={"05"}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardTab
              title={"Joël A. Prévost"}
              image={
                "https://webline.uz/storage/images/53e405dd00a04759ab8a517a8004f656.webp"
              }
              number={"05"}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}

// // const dataaa = () => {
// //     return (

// //     )
// // }

// const Tabscom = () => {
//     const [t, i18n] = useTranslation("global");
//     return (
//         <Tabs
//             defaultActiveKey="2"
//             items={["TabsleOutlined", "AndroidOutlined"].map((Icon, i) => {
//                 const id = String(i + 1);
//                 return {
//                     label: (
//                         <span>
//                             {id == 1 ? t("body.sectionHead"): t("body.sectionHeads")}
//                         </span>
//                     ),
//                     key: id,
//                     children: `${id == 1 ?"hello" : "sdfd"}`,
//                 };
//             })}
//         />
//     )
// }
// export default Tabscom;
