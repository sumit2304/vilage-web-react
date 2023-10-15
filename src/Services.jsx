import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Services.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Services() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }} className="tab-panel-container">
      <Tabs
    orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    sx={{ borderRight: 1, borderColor: 'divider' }}
    className="vertical-tabs"
  >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>

      <div className="tab-content">
      <TabPanel value={value} index={0}>
    
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are a dedicated team of professionals
        passionate about our work and committed to delivering high-quality
        products and services to our customers.
      </p>
      <p>
        Our mission is to provide innovative solutions and outstanding
        customer experiences. With years of experience in the industry, we
        strive to meet and exceed your expectations.
      </p>

      <h3 style={{textAlign:"center", padding:"5px"}}>History</h3>
      <div className="history-section">
       
        <p>
          Welcome to our website! We are a dedicated team of professionals
          passionate about our work and committed to delivering high-quality
          products and services to our customers.
       
          Our mission is to provide innovative solutions and outstanding
          customer experiences. With years of experience in the industry, we
          strive to meet and exceed your expectations.
          Welcome to our website! We are a dedicated team of professionals
          passionate about our work and committed to delivering high-quality
          products and services to our customers.
       
          Our mission is to provide innovative solutions and outstanding
          customer experiences. With years of experience in the industry, we
          strive to meet and exceed your expectations.
           Welcome to our website! We are a dedicated team of professionals
          passionate about our work and committed to delivering high-quality
          products and services to our customers.
       
          Our mission is to provide innovative solutions and outstanding
          customer experiences. With years of experience in the industry, we
          strive to meet and exceed your expectations.
       
      </p>
      <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"  
          alt="History Image"
          className="history-image"
          style={{ width: "100%", maxWidth: "300px" }}/>
        
      </div>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      </div>
    </Box>
  );
}
