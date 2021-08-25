import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setNote } from "../store/reducers/allNotesReducer";
import { getPageNotes, getPageNotesByFilter } from "./Requests";

export function RefreshNotesState(filter = "", page = 0){
    const dispatch = useDispatch() 
    const history = useHistory()

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
            alert(e)    
        }

}