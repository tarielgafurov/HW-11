import styles from './Modal.module.css'

function ModalDelete(props){
    return (
        <div className={styles.container}>

        
        <div className={styles.backdrops}>
            <div className={styles.block}>
                <h2 className={styles.text}>Вы действительно хотите удалить ?</h2>
                <button className={styles.buttonYes} id={props.id} onClick={props.onDel}>Да</button>
                <button className={styles.buttonNo} onClick={() => props.none(false)}>Нет</button>
            </div>
        </div>
        </div>
    )
}


export default ModalDelete