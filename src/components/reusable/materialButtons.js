import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export const ScheduleCall = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[600],
    width: '280px',
    height: '45px',
    padding: '3px',
    fontSize: '20px',
    zIndex: '0',
    '&:hover': {
      backgroundColor: teal[400],
    },
  },
}))(Button);

export const SearchButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[600],
    width: "12vw",
    padding: '10px',
    borderRadius: 0,
    zIndex: '0',
    '&:hover': {
      backgroundColor: teal[400],
    },
    '@media (max-width: 625px)': {
      width: "80px",
    }
    // [theme.breakpoints.up('sm')]: {
    //   backgroundColor: 'red',
    // },
  },
}))(Button);

export const SingleSlot = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    // backgroundColor: '#052727',
    backgroundColor: teal[600],
    padding: '8px 18px',
    // border: '1px black solid',
    borderRadius: '4px',
    margin: '2.5px 26px',
    fontSize: '16px',
    zIndex: '0',
    '&:hover': {
      backgroundColor: teal[400],
    },
  },
}))(Button);
