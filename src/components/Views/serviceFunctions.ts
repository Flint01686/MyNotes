export default function onlyTrueHandler(event: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<string>>){
    if (event.target.value) setter(event.target.value);
    else setter("");
}