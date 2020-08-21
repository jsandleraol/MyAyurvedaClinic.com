import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
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

  export const SearchInput = withStyles((theme) => ({
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
    },
  }))(Button);
