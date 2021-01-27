import React, {forwardRef} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {
    return (
        <div ref={ref} className={`${ username === message.username ? "userMessageDiv" : "messageDiv" }`}>
            <Card className={`${ username === message.username ? "userCard" : "card" }`}>
                <CardContent>
                    <Typography color="textSecondary">
                        {message.username}
                    </Typography>
                    <Typography>
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})
export default Message;
