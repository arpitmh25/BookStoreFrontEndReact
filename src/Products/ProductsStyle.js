import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    sorting: {

        marginTop: '2%',
        width: 'auto',
        width: 600,
        marginLeft: 'auto',
        marginRight: '200',
        marginTop: '1 %',
        marginBottom: '2%'
    }
}));