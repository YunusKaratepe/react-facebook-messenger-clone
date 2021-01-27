import React, {forwardRef} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {


    return (
        <div ref={ref} className={`${ username === message.username ? "userMessageDiv" : "messageDiv" }`}>
            <Card className={`${ username === message.username ? "userCard" : "card" }`}>
                <CardContent>
                    <Typography style={{fontSize: "12px", float: "left"}} color="textSecondary">
                        {message.username}
                    </Typography>

                    <Typography style={{fontSize: "12px", float: "right", marginLeft: "4px"}} color="textSecondary">
                        {`${ message.timestamp ? 
                            new Date(message.timestamp.seconds * 1000).getHours() + ':' + 
                            (
                                new Date(message.timestamp.seconds * 1000).getMinutes() <= 10 ? 
                                '0' + new Date(message.timestamp.seconds * 1000).getMinutes(): 
                                '' + new Date(message.timestamp.seconds * 1000).getMinutes()
                            )
                        : ''
                        }`}

                    </Typography>

                    
            
                    <Typography style={{clear: "left"}}>
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})
export default Message;
