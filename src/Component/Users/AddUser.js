import {useState} from 'react'
import Button from '../Ui/Button'
import styles from './AddUser.module.css'
import Card from '../Ui/Card'
import ErrorModal from '../Ui/ErrorModal'


const AddUser =(props) =>{
const [enteredUsername, setEnteredUsername] = useState('')
const [enteredAge , setEnteredAge] = useState('')
const [error , setError] = useState('')


const addUserHandler = event => {
    event.preventDefault()
    if(enteredUsername.trim().length === 0  || enteredAge.trim().length === 0){
        setError({
            title : 'invailed input',
            message : "Please enter a valid name and age (not-emoty values)"
    })

    
    return;
    }
    if(+enteredAge < 1){
        setError({
            title : 'invailed age', 
            message : 'Pleace enter a valid age (>0).'
        })
        return;
    }
    props.onAddUser(enteredUsername , enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
}


const UserNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
}


const ageChangehandler = (event) => {
    setEnteredAge(event.target.value)
}

const errorHandler =() =>{
    setError(null)
}
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
        <lable htmlFor="username">UserName</lable>
        <input type='text' id="username" value={enteredUsername} onChange={UserNameChangeHandler}/>
        <lable htmlFor="age">Age</lable>
        <input type='number' id="age" value={enteredAge} onChange={ageChangehandler}/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
        </div>
    ) 
}

export default AddUser