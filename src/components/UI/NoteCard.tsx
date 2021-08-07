import React, { FC } from 'react'
import { Card } from 'react-bootstrap';
import { NodeCardStyle } from '../../style/NoteCardSytle';
import { Note } from '../Interfaces/Note';
import TagInput from './TagInput'

const NoteCard: FC<Note> = ({img="", tags=[], text=""}) =>
{
    return (
        <NodeCardStyle>
            <Card className="card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <TagInput tags={tags} readonly={true}></TagInput>        
                    </Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </NodeCardStyle>   
    )
}
export default NoteCard