import  {React,useState,useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

const AddUser = props => {

    // if we use the hook of ref we can easily ge the value of the input or any DOM element as it manipulates the DOM node but it is uncontrolled state.
    const refUsername = useRef();
    const refAge = useRef();


    // const [username, setUsername] = useState("");
    // const [age, setAge] = useState("");
    
    const [error,setError] = useState();
    
    // const handleUserChange = event => {
    //     setUsername(event.target.value);
    // }

    // const handleAgeChange = event => {
    //     setAge(event.target.value);
    // }

    const handleSubmit = event => {
        event.preventDefault();   
        // using ref gives the DOM  element which as a current object that contains the value
        const username = refUsername.current.value;
        const age = refAge.current.value;
        
        if(username.trim().length === 0 ||age.trim().length === 0){
            setError({title: "Invalid Input!",
        message : "Please enter the correct username and age."});
        return;
        }    
        if (+age < 1){
            setError({title: "Invalid Input!",
            message : "Please enter the correct age."});
            return;
        }
       

        props.onAddUser({username:username, age:age}); 
        // setUsername("");
        // setAge("");   

        // should not use this practice for clearing the input field as it manipulates the DOM directly
        refUsername.current.value = '';
        refAge.current.value = '';
    }

    const handleClose = () => {
            setError(null);
        }

    return (
      <Wrapper>
        {error && <ErrorModal errorModal = {error} onErrorHandle = {handleClose} />}
        <Card className={classes.input}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              id="username"
            //   value={username}
            //   onChange={handleUserChange}
            ref={refUsername}
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
            //   value={age}
            //   onChange={handleAgeChange}
            ref={refAge}
            />
            <Button type="submit">Add Age</Button>
          </form>
        </Card>
      </Wrapper>
    );

};

export default AddUser;