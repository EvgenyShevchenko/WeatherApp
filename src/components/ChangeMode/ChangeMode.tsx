import React, {useState} from "react";
import Switch from '@material-ui/core/Switch';

interface ChangeModeProps {
    toggleChangeMode: () => void
}

const ChangeMode: React.FC<ChangeModeProps> = ({toggleChangeMode}) => {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event: React.ChangeEvent<any>) => {
        setState({...state, [event.target.name]: event.target.checked});
        toggleChangeMode()
    };

    return (
        <div className="changeMode">Change mode:
            <Switch
                checked={state.checkedA}
                onChange={(event: React.ChangeEvent<any>) => handleChange(event)}
                name="checkedA"
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
        </div>
    );
}

export default ChangeMode;
