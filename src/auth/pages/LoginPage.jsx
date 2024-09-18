import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink} from "react-router-dom";

import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hoks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {

    const { status } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const { email, password, onInputChange }  = useForm({
        email: 'hector@gmail.com',
        password: '123456',
    });

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const onSubmit = ( event ) => {
        event.preventDefault();
        dispatch( startLoginWithEmailPasswor( {email, password} ) );
    }
    
    const onGoogleSignIn = () => {
        console.log("onGoogleSignIn");
        dispatch( startGoogleSignIn() );
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit }>
                <Grid container sx={{ gap: 2 }}>

                    <Grid item xs={ 12 } >
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } >
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticating } 
                                type="submit"
                                variant="contained"
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating } 
                                onClick={ onGoogleSignIn } 
                                variant="contained"
                                fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={ RouterLink } color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                
                </Grid>
            </form>
        </AuthLayout>
    );
};
