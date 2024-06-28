import { Grid, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                backgroundColor: "primary.main",
                p: 4,
            }}
        >
            <Grid
                item
                className="box-shadow"
                xs={3}
                sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Login
                </Typography>

                <form>
                    <Grid container sx={{ gap: 2 }}>

                        <Grid item xs={ 12 } >
                            <TextField
                                label="Correo"
                                type="email"
                                placeholder="correo@gmail.com"
                                fullWidth
                            />
                        </Grid>
                        
                        <Grid item xs={ 12 } >
                            <TextField
                                label="Contraseña"
                                type="password"
                                placeholder="Contraseña"
                                fullWidth
                            />
                        </Grid>

                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

// Con la propiedad sx (sería algo así como "style extendend") tenemos acceso al tema que tenemos definido con el themeProvider
