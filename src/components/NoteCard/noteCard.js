import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, cyan, green } from '@material-ui/core/colors';
const myStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === 'work') {
                return '1px solid red'
            }
            if (note.category === 'reminders') {
                return '1px solid green'
            }
            if (note.category === 'money') {
                return '1px solid cyan'
            }
            if (note.category === 'todos') {
                return '1px solid darkred'
            }
        }
    },
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'work') {
                return 'red';
            }
            if (note.category === 'reminders') {
                return green[800]
            }
            if (note.category === 'money') {
                return cyan[800]
            }
            if (note.category === 'todos') {
                return 'darkred';
            }
            return blue[700];
        }
    }
});
const noteCard = ({ note, handleDelete }) => {
    const classes = myStyles(note);
    return (
        <div>
            <Card elevation={8} className={classes.test}>
                <CardHeader avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category} />
                <CardContent>
                    <Typography variant='body2' color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default noteCard;
