import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { allNotesStateI } from '../../store/reducers/allNotesReducer';
import { pinNotesStateI } from '../../store/reducers/pinnedNotes';
import { RootState } from '../../store/reducers/rootReducer';
import { TagInputStyle } from '../../style/TagInputStyle';
import { TagListStyle } from '../../style/TagsListStyle';
import Tag from './Tag'

interface TagInputI
{
    readonly readonly: boolean;
    readonly id?: number;
    readonly onChange?: Function;
    readonly tags?: Array<string>;
}

export interface TagStateI{
    tags: Array<string>
}

const TagInput: FC<TagInputI> = ({readonly, id, tags, onChange}) =>
{    
    let notesState : allNotesStateI = useSelector((notes: RootState) => notes.notes)
    let pinnedNotesState : pinNotesStateI = useSelector((notes: RootState) => notes.pinnedNotes)

    const [currentTags, setCurrentTags] = useState(notesState.notes
        .find(note => note.id === id)?.tags 
        ??  pinnedNotesState.pinnedNotes.find(note => note.id === id)?.tags
        ?? tags ?? [])
    let addTag = (tag: string | undefined) => {
        if (tag && tag?.length > 22) {
            alert("Too much symbols in tag. Number of tag symbols must be less then 23");
            return;
        }
        if (!tag || currentTags.includes(tag)) return;
        setCurrentTags(prev => prev.concat(tag))
    }

    function deleteTag(currentTag: any)
    {
        setCurrentTags(prev => prev.filter(tag => tag !== currentTag))
    }

    useEffect(() => {
        if (id)
            setCurrentTags(notesState.notes
                .find(note => note.id === id)?.tags 
                ??  pinnedNotesState.pinnedNotes.find(note => note.id === id)?.tags
                ?? tags ?? [])
    }, [notesState])

    useEffect(() => {
        if (onChange) onChange(currentTags)
    }, [currentTags])

    const currentTag = useRef<HTMLInputElement>(null)
    return (
        <TagInputStyle>
            <TagListStyle>
                {(notesState.notes.find(note => note.id === id)?.tags 
                    ??  pinnedNotesState.pinnedNotes.find(note => note.id === id)?.tags
                    ?? tags ?? []).map( (tag, key) => <Tag
                    onClick={deleteTag} key={key}>{tag}</Tag>)}
            </TagListStyle>
            { readonly ? null : (
                <div className="input__tags">
                    <input ref={currentTag} type="text" maxLength={19}  onKeyDown={function(e) {
                        if (e.key === 'Enter') {
                            addTag(currentTag.current?.value)
                            e.preventDefault()
                        }
                    }}/>
                    <button type="button" onClick={() => addTag(currentTag.current?.value)}>+</button> 
                </div>
            )}
        </TagInputStyle>
    )
}
export default TagInput;