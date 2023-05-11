import React from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';


const Section = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={2}>
                </Grid>
                <Grid xs={4}>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Section;
