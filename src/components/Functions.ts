import { useDispatch } from "react-redux";
import { setNote } from "../store/reducers/allNotesReducer";
import { getPageNotes, getPageNotesByFilter } from "./Requests";

export function RefreshNotesState(filter = "", page = 0){
    const dispatch = useDispatch() 

    try
        {
            
            filter === "" ? getPageNotes(page).then(res => {
                dispatch(setNote(res.data))
            })
            : getPageNotesByFilter(page, filter).then(res => {
                dispatch(setNote(res.data))
            })
        }
        catch (e)
        {
            console.log(e)    
        }

}