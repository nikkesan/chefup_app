import React, { useReducer } from "react";
import "./createNewLesson.css";
import { Form, Input, Label, Button } from "../CSSFormComponents.js";
import postLessonData from "../../utils/postLessonData";
import { A } from "../../App.style.js";
// Link to how to useReducer for our future reference
//https://medium.com/javascript-in-plain-english/react-controlled-forms-with-hooks-538762aab935

const initialState = {
  dishPhoto: "",
  teacherPhoto: "",
  dishName: "",
  teacherName: "",
  lessonLength: "",
  lessonDates: "",
  lessonHours: "",
  location: "",
  distanceToTravel: "",
  // skillLevel,
  ingredients: "",
  description: ""
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

const CreateNewLesson = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // if(state) {
  //     console.log(state);
  // }

  const onChange = e => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    dispatch({ field: e.target.name, value: val });
  };

  // const [checked, setChecked] = React.useState([]);
  const {
    dishPhoto,
    dishName,
    teacherName,
    teacherPhoto,
    lessonLength,
    lessonDates,
    lessonHours,
    location,
    distanceToTravel,
    // skillLevel,
    ingredients,
    description
    // dietaryOptions
  } = state;

  //with more time we would want to include tags for dietaryOptions
  // this is not a react type solution - we are pushing each selected value to an array
  // const onSelect = event => {
  //   console.log(event.target.value);
  //
  //   if (dietaryOptions.includes(event.target.value)) {
  //     dietaryOptions.splice(dietaryOptions.indexOf(event.target.value), 1);
  //   } else {
  //     dietaryOptions.push(event.target.value);
  //   }
  // };
  const handleSubmit = event => {
    event.preventDefault();
    alert("congratulations, you created a lesson");
    postLessonData(state);
    console.log("state handleSumbit", state);
  };

  return (
    <Form onSubmit={handleSubmit} className="lesson-form">
      <Label className="label-form" htmlFor="dishPhoto">
        Add photo
      </Label>
      <Input
        type="text"
        name="dishPhoto"
        id="dishPhoto"
        defaultValue={dishPhoto}
        required
        onChange={onChange}
      />

      <p className="image-link">
        Photo URLs: please provide a link to a photo (or avatar or other
        graphical representation of you) that is hosted online. <br />
        You can use a service like <A href="https://imgur.com/upload">
          imgur
        </A>{" "}
        to upload a picture if needed - make sure you include .jpg at the end of
        the filename
      </p>
      <Label htmlFor="dishPhoto">Add photo of your dish</Label>
      <Input
        type="text"
        name="dishPhoto"
        id="dishPhoto"
        defaultValue={dishPhoto}
        required
        onChange={onChange}
      />
      <Label htmlFor="teacherPhoto">
        Add photo of yourself so your students know more about you
      </Label>
      <Input
        type="text"
        name="teacherPhoto"
        id="teacherPhoto"
        defaultValue={teacherPhoto}
        required
        onChange={onChange}
      />

      <Label className="label-form" htmlFor="dishName">
        What's the name of your dish?
      </Label>
      <Input
        type="text"
        name="dishName"
        id="dishName"
        defaultValue={dishName}
        required
        onChange={onChange}
      />

      <Label className="label-form" htmlFor="teacherName">
        What is your name?
      </Label>
      <Input
        type="text"
        name="teacherName"
        id="teacherName"
        defaultValue={teacherName}
        required
        onChange={onChange}
      />

      <Label className="label-form" htmlFor="lessonLength">
        Lesson Length
      </Label>
      <Input
        type="text"
        name="lessonLength"
        id="lessonLength"
        defaultValue={lessonLength}
        required
        onChange={onChange}
      />

      <Label className="label-form" htmlFor="lessonDates">
        Select the date and time you are available to teach:
      </Label>
      <Input
        type="date"
        name="lessonDates"
        id="lessonDates"
        defaultValue={lessonDates}
        required
        onChange={onChange}
      />

      <Label htmlFor="lessonHours"></Label>
      <Input
        type="time"
        name="lessonHours"
        id="lessonHours"
        aria-label="Enter lesson hours"
        defaultValue={lessonHours}
        required
        onChange={onChange}
      />

      <Label className="label-form" htmlFor="location">
        Location
      </Label>
      <Input
        type="text"
        name="location"
        id="location"
        defaultValue={location}
        required
        onChange={onChange}
      />

      <Label className="label-form" htmlFor="distanceToTravel">
        What distance are you willing to travel?
      </Label>
      <Input
        type="text"
        name="distanceToTravel"
        id="distanceToTravel"
        defaultValue={distanceToTravel}
        required
        onChange={onChange}
      />

      <fieldset className="fieldset">
        <legend>What skill level is this lesson aimed at?</legend>
        <Label htmlFor="beginner">Beginner</Label>
        <input
          type="radio"
          name="skillLevel"
          id="beginner"
          defaultValue="beginner"
          onChange={onChange}
        />

        <Label htmlFor="improver">Improver</Label>
        <input
          type="radio"
          name="skillLevel"
          id="improver"
          defaultValue="improver"
          onChange={onChange}
        />

        <Label htmlFor="advanced">Advanced</Label>
        <input
          type="radio"
          name="skillLevel"
          id="advanced"
          defaultValue="advanced"
          onChange={onChange}
        />
      </fieldset>

      <Label className="label-form" htmlFor="ingredients">
        Ingredients:
      </Label>
      <Input
        type="textarea"
        name="ingredients"
        defaultValue={ingredients}
        aria-label="enter ingredients"
        required
        onChange={onChange}
      />
      <Label className="label-form" htmlFor="description">
        Description:
      </Label>
      <Input
        type="textarea"
        name="description"
        id="description"
        required
        defaultValue={description}
        onChange={onChange}
      />

      {/* <div>
        <p>Tick all that apply:</p>
        <Input
          type="checkbox"
          id="vegetarian"
          name="dietaryOptions"
          value="Vegetarian"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="vegetarian">Vegetarian</Label>
        <Input
          type="checkbox"
          id="vegan"
          name="dietaryOptions"
          value="Vegan"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="vegan">Vegan</Label>

        <Input
          type="checkbox"
          id="pescatarian"
          name="dietaryOptions"
          value="Pescatarian"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="pescatarian">Pescatarian</Label>

        <Input
          type="checkbox"
          id="meat"
          name="dietaryOptions"
          value="Meat"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="meat">Meat</Label>

        <Input
          type="checkbox"
          id="organic"
          name="dietaryOptions"
          value="Organic"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="organic">Organic</Label>
        <Input
          type="checkbox"
          id="dairyFree"
          name="dietaryOptions"
          value="Dairy-free"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="dairyFree">Dairy Free</Label>

        <Input
          type="checkbox"
          id="glutenFree"
          name="dietaryOptions"
          value="gluten-free"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="glutenFree">Gluten Free</Label>

        <Input
          type="checkbox"
          id="halal"
          name="dietaryOptions"
          value="Halal"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="halal">Halal</Label>

        <Input
          type="checkbox"
          id="kosher"
          name="dietaryOptions"
          value="Kosher"
          onChange={event => onSelect(event)}
        />
        <Label htmlFor="kosher">Kosher</Label>
        <Input
          onChange={event => onSelect(event)}
          type="checkbox"
          id="paleo"
          name="dietaryOptions"
          value="paleo"
        />
        <Label htmlFor="paleo">Paleo</Label>
      </div> */}
      <Label></Label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
export default CreateNewLesson;
