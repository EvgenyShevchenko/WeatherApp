import React, {useState} from "react";
import Switch from '@material-ui/core/Switch';

function ChangeMode({changeMode,toggleChangeMode}) {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
        toggleChangeMode()
    };


    return (
        <div className="changeMode">Change mode:
            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
        </div>
    );
}

export default ChangeMode;