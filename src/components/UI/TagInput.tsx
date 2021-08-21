import React, { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTagRedux, del, set } from '../../store/reducers/tagsReducer';
import { TagInputStyle } from '../../style/TagInputStyle';
import { TagListStyle } from '../../style/TagsListStyle';
import Tag from './Tag'

interface TagInputI
{
    readonly readonly: boolean;
    readonly tags: Array<string>;
    readonly onChange?: Function;
}

export interface TagStateI{
    tags: Array<string>
}

const TagInput: FC<TagInputI> = ({readonly, tags, onChange}) =>
{    
    const [currentTags, setCurrentTags] = useState(tags)
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
        if (onChange) onChange(currentTags)
    }, [currentTags])

    const currentTag = useRef<HTMLInputElement>(null)
    return (
        <TagInputStyle>
            <TagListStyle>
                {currentTags.map( (tag, key) => 
                    <Tag onClick={deleteTag} key={key}>{tag}</Tag>)}
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