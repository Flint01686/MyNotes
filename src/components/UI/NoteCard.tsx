import React, { FC } from 'react'
import { Card, Button } from 'react-bootstrap';
import { note } from '../Interfaces/Note';

const NoteCard: FC<note> = ({img="", tags=[], text=""}) =>
{
    let style = {
        width: '18rem',
        ":hover": {
            transition: 'all 200ms', 
            backgroundColor: 'dimgrey',
        }
    }
    return (
        <Card style={style}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    <input type="text" defaultValue={tags.join("")} />
                </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default NoteCard