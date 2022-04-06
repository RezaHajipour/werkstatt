import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function KontaktWithForm() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate>
            <h1>Wir sind für Sie da!</h1>
            <h4>
                Montag - Freitag: 9:00--17:00 <br />
                Samstag: 8:00-13:00 <br />
                Rufen Sie an unter: 040 - 1808 1289 <br />
                Mobile: 0176 45 88 0462
                <br />
                E-Mail: meisterbetriebwaisi@gmail.com
            </h4>
            <CssTextField
                className={classes.margin}
                id="custom-css-standard-input"
                label="Vorname"
            />
            <CssTextField
                className={classes.margin}
                id="custom-css-standard-input"
                label="Nachname"
            />
            <CssTextField
                className={classes.margin}
                id="custom-css-standard-input"
                label="E-Mail"
                required
            />
            <CssTextField
                className={classes.margin}
                id="custom-css-standard-input"
                label="Telefonnummer"
            />
            <CssTextField
                id="outlined-multiline-static"
                label="Nachricht"
                multiline
                rows="3"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Send
            </Button>
        </form>
    );
}
export default KontaktWithForm;

//----------------Material-ui----------------------

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#61dafb",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#61dafb",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "red",
            },
            "&:hover fieldset": {
                borderColor: "#61dafb",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#61dafb",
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    margin: {
        margin: theme.spacing(1),
        width: "30vw",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "30vw",
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: "#61dafb",
        "&.Mui-focused": {
            borderColor: "green",
        },
    },
}));
