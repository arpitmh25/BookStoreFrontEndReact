import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        height: '540px',
        paddingTop: '100%',

    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        color: 'white',
        width: '100%',
        height: '40px',

    },

}));