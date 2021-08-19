import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {InputBase, InputLabel, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

class SubjectMaterialInsertionForm extends Component{
    render() {
        return(
            <>
                <div style={{width:"60%",marginLeft:"18%",marginTop:"100px",
                    border:"#008080", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                    <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                        Subject Materials
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Choose the Term</InputLabel>
                                <Select
                                    required
                                    native
                                    // value={state.age}
                                    // onChange={handleChange}
                                    label="Choose the Term"
                                    inputProps={{
                                        name: 'SelectTerm',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Term 1</option>
                                    <option value={20}>Term 2</option>
                                    <option value={30}>Term 3</option>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Choose the Week</InputLabel>
                                <Select
                                    required
                                    native
                                    // value={state.age}
                                    // onChange={handleChange}
                                    label="Choose the Week"
                                    inputProps={{
                                        name: 'SelectTerm',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Week 1</option>
                                    <option value={20}>Week 2</option>
                                    <option value={30}>Week 3</option>
                                    <option value={40}>Week 4</option>
                                    <option value={50}>Week 5</option>
                                    <option value={60}>Week 6</option>
                                    <option value={70}>Week 7</option>
                                    <option value={80}>Week 8</option>
                                    <option value={90}>Week 9</option>
                                    <option value={100}>Week 10</option>
                                </Select>
                            </FormControl>
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
                            <TextField
                                required
                                id="lessonName"
                                name="LessonName"
                                label="Unit topic Name"
                                placeholder="lesson name "
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="lectureLink"
                                name="lecLink"
                                label="Lecture Link"
                                placeholder="insert the lecture link here"
                                variant="outlined"
                                multiline
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="subtitle1" display="block" gutterBottom>
                               Upload Lesson Materials
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <input
                                accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                                // className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
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
export default SubjectMaterialInsertionForm