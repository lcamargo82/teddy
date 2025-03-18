import { Button, TextField } from "@mui/material";
import { LoginContainer } from "./style";
import { useNavigate } from "react-router";
import { ClientStore } from "../../stores/clients/client.store";
import { toast } from "react-toastify";

function Login() {
    const username = ClientStore(state => state.username);
    const setUserName = ClientStore((state) => state.login);
    const setAuthenticated = ClientStore((state) => state.authenticate);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim().length > 0) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', username);
            setAuthenticated();
            navigate('/');
            toast.success(`Seja bem-vindo ${username}`);
        } else {
            toast.error("Digite seu nome");
        }
    };

    return (
        <LoginContainer>
            <div className="login-form-container">
                <span className="login-welcome">Olá, Seja bem-vindo!</span>
                <TextField
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'grey',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey',
                            },
                            '&:hover fieldset': {
                                borderColor: 'grey',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#EC6724',
                            },
                        },
                    }}
                    color="primary"
                    className="text-field-login"
                    id="outlined-basic"
                    label="Digite o seu nome"
                    variant="outlined" />
                <Button onClick={handleLogin} className="button-form-login" variant="contained">
                    Entrar
                </Button>
            </div>
        </LoginContainer>
    );
}

export default Login;
