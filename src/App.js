import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Email from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Logo from "./logo.png";
import { TextField, Grid, Card, Button } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

const App = ({ classes }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className={classes.background} />
      <Grid container className={classes.root}>
        <Grid item>
          <Card className={classes.card}>
            <Grid container className={classes.center}>
              <Grid item>
                <img alt="logo" src={Logo} />
              </Grid>
              <Grid className={classes.spacing}>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    label="Email"
                    variant="filled"
                    id="email"
                    type="email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton disabled>
                            <Email />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    label="Senha"
                    variant="filled"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} className={classes.backgroundButton}>
                  <Button className={classes.button}>ACESSAR</Button>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
