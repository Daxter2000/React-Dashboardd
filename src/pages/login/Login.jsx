import "./login.scss"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Input } from "@mui/icons-material";
import { InputLabel } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';

const Login = () => {
    return (
        <div>
            <div className="login">
                <div className="form_login_container">
                <FormControl>

                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

                </FormControl>
                </div>
                

            </div>
        </div>
    );
}

export default Login
