import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, Select} from "@material-ui/core";


class NoticeInsertForm extends Component{
    render() {
        return(
            <>
                <div style={{width:"40%",marginLeft:"28%",marginTop:"100px",
                    border:"#008080", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                    <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                        Notices
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="noticeHeading"
                                name="noticeHead"
                                label="Notice Heading"
                                placeholder="Type the heading"
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="noticeDetails"
                                name="noticeDescription"
                                label="Notice Details"
                                placeholder="Describe the Notice"
                                multiline
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Select Subject</InputLabel>
                                <Select
                                    required
                                    native
                                    // value={state.age}
                                    // onChange={handleChange}
                                    label="Select Subject"
                                    inputProps={{
                                        name: 'SelectSubject',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Mathematics</option>
                                    <option value={20}>Science</option>
                                    <option value={30}>English</option>
                                    <option value={40}>History</option>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{marginTop:"15px",width:"100%"}}
                                startIcon={<SaveIcon />}
                            >
                                Insert
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}

export default NoticeInsertForm