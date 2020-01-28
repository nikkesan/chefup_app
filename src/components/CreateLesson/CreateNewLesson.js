import React, { useReducer } from "react";
import "./createNewLesson.css";
import { Form, Input, Label } from "../CSSFormComponents.js";

// Link to how to useReducer for our future reference
//https://medium.com/javascript-in-plain-english/react-controlled-forms-with-hooks-538762aab935

const initialState = {
  photo: "",
  dishName: "",
  lessonLength: "",
  lessonDates: "",
  lessonHours: "",
  location: "",
  distanceToTravel: "",
  skillLevel: "",
  ingredients: "",
  description: "",
  dietaryOptions: []
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
    photo,
    dishName,
    lessonLength,
    lessonDates,
    lessonHours,
    location,
    distanceToTravel,
    skillLevel,
    ingredients,
    description,
    dietaryOptions
  } = state;

  // this is not a react type solution - we are pushing each selected value to an array
  const onSelect = event => {
    // console.log(event.target.value);
    if (dietaryOptions.includes(event.target.value)) {
      console.log(dietaryOptions.indexOf(event.target.value));
      dietaryOptions.splice(dietaryOptions.indexOf(event.target.value), 1);
      console.log("remove this option");
    } else {
      dietaryOptions.push(event.target.value);
    }
    console.log({ dietaryOptions });
  };
  // console.log({ dietaryOptions });

  return (
    <Form className="lesson-form">
      <div>
        <Label for="dishPhoto">Photo</Label>
        <Input
          type="file"
          name="dishPhoto"
          id="dishPhoto"
          defaultValue={photo}
          required
          onChange={onChange}
        />
      </div>
      <div>
        <Label for="dishName">What's the name of your dish?</Label>
        <Input
          type="text"
          name="dishName"
          id="dishName"
          defaultValue={dishName}
          required
          onChange={onChange}
        />
      </div>
      <div>
        <label for="lessonLength">Lesson Length</label>
        <Input
          type="text"
          name="lessonLength"
          id="lessonLength"
          defaultValue={lessonLength}
          required
          onChange={onChange}
        />
      </div>
      <div>
        <p>Select the date and time you are available to teach:</p>
        {/* create html where they can add more than 1 input time and date */}
        <Label for="lessonDates">
          <Input
            type="date"
            name="lessonDates"
            id="lessonDates"
            defaultValue={lessonDates}
            required
            onChange={onChange}
          />
        </Label>
        <Label for="lessonHours">
          <Input
            type="time"
            name="lessonHours"
            id="lessonHours"
            defaultValue={lessonHours}
            required
            onChange={onChange}
          />
        </Label>
      </div>
      <div>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          defaultValue={location}
          required
          onChange={onChange}
        />
      </div>
      <div>
        <Label for="distanceToTravel">
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
      </div>
      <div>
        <p>
          What skill level do you believe this lesson would be suitable for?
        </p>
        <Label for="beginner">
          Beginner
          <Input
            type="radio"
            name="skillLevel"
            id="beginner"
            defaultValue={skillLevel[0]}
            onChange={onChange}
          />
        </Label>
        <Label for="intermediate">
          Intermediate
          <Input
            type="radio"
            name="skillLevel"
            id="intermediate"
            defaultValue={skillLevel[1]}
            onChange={onChange}
          />
        </Label>
        <Label for="advanced">
          Advanced
          <Input
            type="radio"
            name="skillLevel"
            id="advanced"
            defaultValue={skillLevel[2]}
            onChange={onChange}
          />
        </Label>
      </div>
      <div>
        <p>Ingredients:</p>
        <Label>
          <Input
            type="textarea"
            name="ingredients"
            defaultValue={ingredients}
            required
            onChange={onChange}
          />
        </Label>
      </div>
      <div>
        <p>Description:</p>
        <Label for="description">
          <Input
            type="textarea"
            name="description"
            id="description"
            required
            defaultValue={description}
            onChange={onChange}
          />
        </Label>
      </div>
      <div>
        <p>Tick all that apply:</p>
        <Input
          type="checkbox"
          id="vegetarian"
          name="dietaryOptions"
          value="Vegetarian"
          onChange={event => onSelect(event)}
        />
        <Label for="vegetarian">Vegetarian</Label>
        <Input
          type="checkbox"
          id="vegan"
          name="dietaryOptions"
          value="Vegan"
          onChange={event => onSelect(event)}
        />
        <Label for="vegan">Vegan</Label>

        <Input
          type="checkbox"
          id="pescatarian"
          name="dietaryOptions"
          value="Pescatarian"
          onChange={event => onSelect(event)}
        />
        <Label for="pescatarian">Pescatarian</Label>

        <Input
          type="checkbox"
          id="meat"
          name="dietaryOptions"
          value="Meat"
          onChange={event => onSelect(event)}
        />
        <Label for="meat">Meat</Label>

        <Input
          type="checkbox"
          id="organic"
          name="dietaryOptions"
          value="Organic"
          onChange={event => onSelect(event)}
        />
        <Label for="organic">Organic</Label>
        <Input
          type="checkbox"
          id="dairyFree"
          name="dietaryOptions"
          value="Dairy-free"
          onChange={event => onSelect(event)}
        />
        <Label for="dairyFree">Dairy Free</Label>

        <Input
          type="checkbox"
          id="glutenFree"
          name="dietaryOptions"
          value="gluten-free"
          onChange={event => onSelect(event)}
        />
        <Label for="glutenFree">Gluten Free</Label>

        <Input
          type="checkbox"
          id="halal"
          name="dietaryOptions"
          value="Halal"
          onChange={event => onSelect(event)}
        />
        <Label for="halal">Halal</Label>

        <Input
          type="checkbox"
          id="kosher"
          name="dietaryOptions"
          value="Kosher"
          onChange={event => onSelect(event)}
        />
        <Label for="kosher">Kosher</Label>
        <Input
          onChange={event => onSelect(event)}
          type="checkbox"
          id="paleo"
          name="dietaryOptions"
          value="paleo"
        />
        <Label for="paleo">Paleo</Label>
      </div>
      <Label>
        <button type="submit">Sign Up</button>
      </Label>
    </Form>
  );
};
export default CreateNewLesson;
