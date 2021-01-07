import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

function Message({message, username}) {
    if (username !== message.username) {
        return (
            <div className={"messageDiv"}>
                <Card className={"card"}>
                    <CardContent>
                        <Typography color="textSecondary">
                            {message.username}
                        </Typography>
                        <Typography>
                            {message.text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
   
    return (
        <div className={"userMessageDiv"}>
            <Card className={"userCard"}>
                <CardContent>
                    <Typography color="textSecondary">
                        {message.username}
                    </Typography>
                    <Typography>
                        {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
    
}

export default Message;
