import style from "./Idstyle.css"

export function Container (props){
    return (
        <div className={style.Idstyle}>
        {props.children}
        </div>
    )
}