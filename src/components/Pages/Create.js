import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FormControlLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    btn: {
        color: 'white',
        backgroundColor: "green ",
        '&:hover': {
            backgroundColor: 'darkgreen'
        }
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})
const Create = () => {
    const classes = useStyles();
    const [title, setTiile] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);
        if (!title) {
            setTitleError(true);
        }
        if (!details) {
            setDetailsError(true);
        }
        if (title && details) {
            fetch('http://localhost:8090/notes', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ title, details, category })
            })
                .then(() => history.push('/'));
        }
    }
    return (
        <Container>

            <Typography variant="h6"
                component="h2" color="textSecondary" gutterBottom>
                Create a New note
           </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="text" type="text" required onChange={(e) => setTiile(e.target.value)}
                    label="Note title" variant="outlined" error={titleError}
                    color="primary" fullWidth className={classes.field}
                />
                <TextField id="text" type="text" required multiline onChange={(e) => setDetails(e.target.value)} error={detailsError}
                    label="Details" variant="outlined" rows={5}
                    color="primary" fullWidth className={classes.field}
                />
                <FormControl className={classes.field}>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormLabel>Note category</FormLabel>
                        <FormControlLabel value="money" control={<Radio color="primary" />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio color="primary" />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio color="primary" />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio color="primary" />} label="Work" />
                    </RadioGroup>
                </FormControl>
                <Button variant="contained" className={classes.btn} type="submit"
                    color="secondary" endIcon={<ArrowForwardIosIcon />}>
                    Submit
            </Button>
            </form>
        </Container>
    )
}
export default Create;
