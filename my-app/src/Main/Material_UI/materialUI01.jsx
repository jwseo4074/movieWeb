import React from "react";
import { useState } from 'react';
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Home, Send, Person, CheckCircle, CheckCircleOutline} from "@material-ui/icons";



const TopHeader = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
        {/* <Tabs value={value} onChange={handleChange}> */}
          <Tab label="아니" icon={<Home />} />
          <Tab label="이게" icon={<Send />}/>
          <Tab label="된다고?" icon={<Person />}/>
          <Tab label="졸라 편하잖아" icon={<CheckCircle />}/>
          <Tab label="베리 굿" icon={<CheckCircleOutline />}/>
        </Tabs>
      </AppBar>
    </>
  );
};

export default TopHeader;
