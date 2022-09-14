import styles from "./modal.module.css"
import {Input} from "../ui/input";
import {Button} from "../ui/button";

type Props = {

};
export const Modal = (props: Props) => {
    return (
        <div style={{
            position : "absolute",
            bottom: "0",
            background : "rgba(0,0,0,0.6)",
            opacity : "1",
            height : "100vh",
            width : "100vw",
            display : "flex",
            justifyContent : "center",
            alignItems : "end",
            zIndex : 2
        }} className={""}>
            <div className={styles.modal}>
                {/*<span className={styles.title}>Login into account</span>*/}
                <div className={"px-4"}>
                    <div className={"mb-10"}>
                        <h1 className={"text-3xl"}>Login Page</h1>
                        <p className={"text-slate-600 mt-1"}>login page is so nice</p>
                    </div>
                    <Input placeholder={"Salam"}/>
                    <Input placeholder={"Salam"} className={"mt-4"}/>
                    <Button className={"mt-4"}>Login</Button>
                </div>
            </div>
        </div>
    );
};
