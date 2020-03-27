import React from "react";
import {Button, Typography, Card, CardContent, CardHeader, Grid} from '@material-ui/core/';

export const Account = () => {
    return (
        <Card>
            <CardHeader title="Account details"/>
            <CardContent>
                <Grid container alignItems="center">
                    <Grid item md={6} xs={12}>
                        <Typography variant="h6">PUBLIC ADRESS:</Typography>
                        <Typography variant="h6">0XDC25EF3F5B8A186998338A2ADA83795FBA27D695E</Typography>
                        <Typography variant="h6">ACCOUNT BALANCE: 22.14334590087</Typography>
                    </Grid>
                    <Grid container item md={6} xs={12} justify="center">
                        <Button color="secondary">Export private key</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}