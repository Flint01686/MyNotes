import React, { FC } from 'react'
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
    return (
        <TagInputStyle>
            <TagListStyle>
                { tags.map( (tag, key) => <Tag key={key}>{tag}</Tag>) }
            </TagListStyle>
            { readonly ? null : (
                <div className="input__tags">
                    <input type="text"/><button>+</button> 
                </div>
            )}
        </TagInputStyle>
    )
}
export default TagInput;