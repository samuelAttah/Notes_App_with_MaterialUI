import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
// import makeStyles from "@mui/styles/makeStyles";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { v4 as uuidv4 } from "uuid";

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 20,
//     backgroundColor: "black",
//   },
// });
export default function Create() {
  // const classes = useStyles();

  const [Note, setNote] = useState({
    id: uuidv4(),
    title: "",
    details: "",
    category: "",
  });
  const [detailsErr, setDetailsErr] = useState(false);
  const [titleErr, setTitleErr] = useState(false);

  const navigate = useNavigate();

  console.log(Note.category);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailsErr(false);
    setTitleErr(false);

    if (Note?.details === "") {
      setDetailsErr(true);
    }

    if (Note?.title === "") {
      setTitleErr(true);
    }
    if (Note.details && Note.title) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(Note),
      }).then(() => {
        navigate("/");
      });
    } else {
      console.log("Fill the form properly");
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="blueviolet"
        gutterBottom
        display="-ms-flexbox"
      >
        Create a New Note
      </Typography>
      <hr />

      <form
        noValidate
        autoComplete="off"
        autoCorrect="true"
        onSubmit={handleSubmit}
      >
        {titleErr ? "Please input title" : null}
        <p></p>
        <TextField
          onChange={handleChange}
          value={Note.title}
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Note Title"
          label="Title"
          required
          color="secondary"
          name="title"
          error={titleErr}
        />
        <p></p>
        {detailsErr ? "Please input details" : null}
        <p></p>
        <TextField
          value={Note.details}
          onChange={handleChange}
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Note Details"
          label="Note Details"
          required
          color="secondary"
          multiline
          rows={4}
          name="details"
          error={detailsErr}
        />
        <p></p>

        <FormControl>
          <FormLabel>Choose Your Gender</FormLabel>

          <FormControlLabel
            control={<Radio />}
            value="Male"
            label="Male"
            name="category"
            checked={Note?.category === "Male"}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Radio />}
            value="Female"
            label="Female"
            name="category"
            checked={Note?.category === "Female"}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Radio />}
            value="Transmale"
            label="Transmale"
            name="category"
            checked={Note?.category === "Transmale"}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Radio />}
            value="Transfemale"
            label="Transfemale"
            name="category"
            checked={Note?.category === "Transfemale"}
            onChange={handleChange}
          />
        </FormControl>
        <p></p>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          SUBMIT
        </Button>
      </form>

      {/* Icons */}

      <AcUnitOutlinedIcon color="secondary" />
    </Container>
  );
}
