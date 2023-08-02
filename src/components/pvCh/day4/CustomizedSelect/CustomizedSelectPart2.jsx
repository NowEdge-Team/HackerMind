import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {day4Part1ChangeIsSelected, day4Part2ChangeIsSelected} from "../../../../redux/daysPV5/actions";
import {useEffect} from "react";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const LabelInput = styled("label")(({ theme }) => ({
    fontSize: "15px",
    letterSpacing: "0.02em",
    lineHeight: "17px",
    textAlign: "left",
    color: "#3f4351",
}));

export default  function CustomizedSelectPart2({item, index, modeEdit}) {
    const [value, setValue] = React.useState("");
    const { part2} = useSelector(state => state.DaysPha5.day4)
    const dispatch = useDispatch();

    useEffect(() => {
        if(part2[index]) setValue(part2[index])
    }, [part2[index]]);

    const handleChange = (event) => {
        dispatch(day4Part2ChangeIsSelected (index, event.target.value))
        setValue(event.target.value);
    };
    return (
        <FormControl fullWidth  variant="standard">
            {item?.title && <LabelInput style={{fontSize: 13}} id="demo-customized-select-label">{item?.title}</LabelInput>}
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={value}
                onChange={handleChange}
                fullWidth
                input={<BootstrapInput/>}
                MenuProps={{
                    style: {zIndex: 35001}
                }}

                disabled={!modeEdit}
            >
                {item?.options.map((option, i) => <MenuItem value={option.value}>{option.label}</MenuItem>)}

            </Select>
        </FormControl>
    )
}
