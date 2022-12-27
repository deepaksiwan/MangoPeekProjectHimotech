import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Autocomplete, Box, List, ListItem, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import wishlist from '../../../src/pages/images/wishlist.svg'
import userplus from '../../../src/pages/images/userplus.svg'
import notification2 from '../../../src/pages/images/notification2.svg'
import ExploreNFT from '../../components/ExploreNFT/ExploreNFT'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyle = makeStyles({
    listpadding: {
        padding: '0px 10px !important',
        display: 'inherit !important',
        width: 'fit-content !important'
    },
    roundbutn: {
        backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
        padding: '14px',
        borderRadius: '30px',
        width: '50px',
        height: '50px',
        transition: '0.5s',
        '&:hover': {
            transform: 'translateY(-6px)'
        }
    },
})

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#fff',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #7C7C7C;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 12px 12px;
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    color: #7C7C7C;
    outline: 3px solid ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #FFCC00;
    color: ${blue[600]};
    box-shadow : 7px 9px 17px -5px #0000004f;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
  width: 100%;
  margin-top : 40px;
  margin-bottom : 40px;
  `,
);

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
  width: 100%;
  background-color: #efefef96;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
   box-shadow : inset 0px 7px 15px -4px #00000024;
  `,
);

const top100Films = [
    { label: 'Activity', },
    { label: 'Favorited', },
    { label: 'Created', },
    { label: 'Activity', },
    { label: 'Favorited', },

];


export default function UnstyledTabsIntroduction() {
    const classes = useStyle();

    return (
        <TabsUnstyled defaultValue={0}>

            <Box sx={{ display: 'flex', marginTop: '40px' }}>
                <TabsList sx={{ width: '70%' }}>
                    <Tab>Collected</Tab>
                    <Tab>Created</Tab>
                    <Tab>Favorited</Tab>
                    <Tab>Activity</Tab>

                    <Box>
                        <Autocomplete
                            size="small"
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            disableUnderline={false}
                            sx={{
                                width: 120,
                                color: '#FF5F29',
                                backgroundColor: 'transparent',
                                marginRight: '1px',
                                borderRadius: '20px',

                                "svg": {
                                    fill: "#FF5F29"
                                }, "fieldset": {
                                    border: 'none',
                                    borderRadius: '20px',
                                },
                                '@media(max-width: 1200px)': {
                                    marginTop: '10px'
                                },
                                '@media(max-width: 600px)': {
                                    width: '100%',
                                }
                            }}
                            renderInput={(params) => <TextField
                                sx={{
                                    borderColor: "transparent",
                                    "& .MuiFormLabel-root": {
                                        color: "#FF5F29", "& .MuiInputBase-input.MuiAutocomplete-input": {
                                            color: "#FF5F29",
                                        },
                                    },
                                }}{...params} label="More" className={classes.TextField} />}
                        />
                    </Box>

                </TabsList >
                <List sx={{ width: '30%', display: 'flex', padding: '0px', marginLeft: '10px' }}>
                    <ListItem className={classes.listpadding}>
                        <Link className={classes.roundbutn} to="#">
                            <Typography component="img" src={wishlist}></Typography>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listpadding}>
                        <Link className={classes.roundbutn} to="#">
                            <Typography component="img" src={userplus}></Typography>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listpadding}>
                        <Link className={classes.roundbutn} to="#">
                            <Typography component="img" src={notification2}></Typography>
                        </Link>
                    </ListItem>
                </List>
            </Box>

            <TabPanel value={0}>
                <ExploreNFT />
            </TabPanel>
            <TabPanel value={1}>Created page</TabPanel>
            <TabPanel value={2}>Favorited page</TabPanel>
            <TabPanel value={3}>Activity page</TabPanel>
            <TabPanel value={4}>More page</TabPanel>
        </TabsUnstyled>
    );
}
