import React, { FC } from 'react'
import { CreateNoteStyle } from '../../style/CreateNoteStyle'
import { Note } from '../Interfaces/Note'
import BaseLayout from '../layouts/BaseLayout'
import Submit from '../UI/Submit'
import TagInput from '../UI/TagInput'

const CreateNote: FC<Note> = ({tags, text, attachment}) =>
{
    return (
        <BaseLayout>
            <CreateNoteStyle>
                <form action="">
                    <h3>New Note</h3>
                    <div>
                        <h6>Text</h6>
                        <textarea></textarea>
                    </div>

                    <div className="block_inline">
                        <h6>Attachments:</h6>
                        <input type="file" multiple/>
                    </div>

                    <div className="block_inline">
                        <h6>Tags:</h6>
                        <TagInput readonly={false} tags={['lol', 'kek', 'zaza']}></TagInput>
                    </div>
                    <Submit fontSize="32px" text="Create"></Submit>
                </form>
            </CreateNoteStyle>
        </BaseLayout>
    )
}
export default CreateNote