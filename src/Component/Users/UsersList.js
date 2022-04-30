import Card from "../Ui/Card"
import Delete from "./Delete.Modal"
import styles from './UserList.module.css'


const UserList = (props) => {
    function deletHand(e){
      
        props.setUserList(
           props.users.filter((el) => el.id !== e.target.id)
            )
    }

    return (
        
        <Card className={styles.users }>
        
            <ul>
                {props.users.map(user => {
                   return <li key={user.id }>
                        {user.name }{user.age }   years old
                     <Delete onDel={deletHand} id={user.id} />
                    </li>
                })}
            </ul>
            
        </Card>
        
    )
}
export default UserList