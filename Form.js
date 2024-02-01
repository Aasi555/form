import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import SendIcon from '@mui/material/SendIcon';



export default function Form() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"

                />
                <TextField

                    id="outlined-disabled"

                    label="Last Name"


                />
                <TextField
                    id="outlined-password-input"
                    label="Mail Id"
                    type="password"
                    autoComplete="current-password"

                />
                <TextField
                    id="outlined-read-only-input"
                    label="PAN Number"

                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Aadhar Card Number"

                />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField
                    id="outlined-helperText"
                    label="Is linked with contact Number"
                />
            </div>
            <div>
                <TextField
                    required
                    id="filled-required"
                    label="Address"

                    variant="filled"
                />

                <TextField
                    id="filled-password-input"
                    label="Nominee"

                    variant="filled"
                />
                <TextField
                    id="filled-read-only-input"
                    label="Nominee Address"


                />
                <TextField
                    id="filled-number"
                    label="Nominee Contact Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <TextField
                    id="filled-search"
                    label="Contact Number "
                />
                <TextField
                    id="filled-helperText"
                    label="Email Id Of Nominee"
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="Date of Birth"
                />
                <TextField

                    id="standard-disabled"
                    label="Relationship with Nominee"
                />
                <TextField
                    id="standard-password-input"
                    label="Proof if Identity Submitted "
                />
                <TextField
                    id="standard-read-only-input"
                    label="Percentage of allocation"

                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                />



            </div><Button variant="contained" >
                Send
            </Button>
        </Box>
    );
}
