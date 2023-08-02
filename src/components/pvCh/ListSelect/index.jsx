import * as React from 'react';
import {useEffect} from 'react';
import {styled} from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import {Grid} from "@mui/material";

const BootstrapInput = styled(InputBase)(({theme}) => ({
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

const LabelInput = styled("label")(({theme}) => ({
    fontSize: "15px",
    letterSpacing: "0.02em",
    lineHeight: "17px",
    textAlign: "left",
    color: "#3f4351",
}));

function CustomizedSelect({item, modeEdit,handleChange , chooses}) {
    const [option, setOption] = React.useState("");
    const handleChange_ = (e) => {
       const list =  item.options.map((elem)=>{
               return {
                   id: elem.value,
                   isSelected: elem.value === +e.target.value,
               }
        })

        handleChange(list);
        setOption(e.target.value);
    }

    useEffect(() => {

        if (!!chooses && chooses.length > 0) {

            const list = chooses.filter((choice) => choice.isSelected ).map((choice) => choice.id);

            item.options.map(elm => {
                if (list.includes(elm.value)) {
                    setOption(elm.value);
                }
            })
        }

    }, [chooses]);



    return (
        <FormControl fullWidth variant="standard" style={{width: "100%",justifyContent:"space-between",height: "100%"}}>
            <LabelInput style={{fontSize: 13}} id="demo-customized-select-label">{item.title}</LabelInput>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={option}
                onChange={handleChange_}
                fullWidth
                sx={{
                    // width: 340,
                }}
                disabled={!modeEdit}
                input={<BootstrapInput/>}
            >
                {item.options.map((option, i) => <MenuItem value={option.value}>{option.label}</MenuItem>)}

            </Select>
        </FormControl>
    )
}


const ListSelect = ({data, modeEdit,handleChange,chooses = []}) => {


    return (
        <Grid container spacing={2}>
            {data.map((item) => {
                return (
                    <Grid item xs={6}>
                        <CustomizedSelect handleChange={handleChange} item={item} modeEdit={modeEdit} chooses={chooses}/>
                    </Grid>
                )
            })
            }
        </Grid>
    )
}


ListSelect.propTypes = {};
ListSelect.defaultProps = {};

export default ListSelect;
