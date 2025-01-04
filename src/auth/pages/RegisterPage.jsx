import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink} from "react-router-dom";

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
    displayName: '',
    email: '',
    password: '',
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6 , 'El password debe de tener más de 6 carateres'],
    displayName: [ (value) => value.length >= 1 , 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmited, setformSubmited] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

    const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid } = useForm( formData, formValidations );

    const onSubmit = ( event ) => {
        event.preventDefault();
        setformSubmited(true);
        if (!isFormValid ) return;

        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={ onSubmit }>
                <Grid container sx={{ gap: 2 }}>

                    <Grid item xs={ 12 } >
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Fernando Herrera"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmited }
                            helperText={ displayNameValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } >
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmited }
                            helperText={ emailValid }
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
                            error={ !!passwordValid && formSubmited }
                            helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2 }}>
                        <Grid 
                            item
                            xs={ 12 }
                            display={ !!errorMessage ? '' : 'none' }    
                        >
                            <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Button 
                                disabled= { isCheckingAuthentication }
                                variant="contained"
                                type="submit"
                                fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } color='inherit' to="/auth/login">
                            ingresar
                        </Link>
                    </Grid>
                
                </Grid>
            </form>
        </AuthLayout>
    );
};
