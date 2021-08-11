import React, { FC, useRef, useState } from 'react'
import { TagInputStyle } from '../../style/TagInputStyle';
import { TagListStyle } from '../../style/TagsListStyle';
import Tag from './Tag'

interface TagInputI
{
    readonly readonly: boolean;
    readonly tags: Array<string>;
}

const TagInput: FC<TagInputI> = ({readonly, tags}) =>
{    
    let [currentTags, setCurrentTags] = useState<Array<string>>(tags);
    let addTag = (tag: string | undefined) => {
        if (!tag || currentTags.includes(tag)) return;
        console.log(currentTags);        
        setCurrentTags([...currentTags, tag])
    }
    const currentTag = useRef<HTMLInputElement>(null)
    return (
        <TagInputStyle>
            <TagListStyle>
                {currentTags.map( (tag, key) => <Tag key={key}>{tag}</Tag>)}
            </TagListStyle>
            { readonly ? null : (
                <div className="input__tags">
                    <input ref={currentTag} type="text"/>
                    <button type="button" onClick={() => addTag(currentTag.current?.value)}>+</button> 
                </div>
            )}
        </TagInputStyle>
    )
}
export default TagInput;