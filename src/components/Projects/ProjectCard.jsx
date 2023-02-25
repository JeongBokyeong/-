import style from "./projects.module.css"
function ProjectCard(props){
    return(
    <div style={{color:"white"}}>
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img src = {props.img} alt="project"/>
            </div>
            <div className={style.infoContainer}>
                <h3>{props.title}</h3>
                <div className={style.siteLinks}>
                    <a className={style.linkButton} href={props.ghlink}>github</a>
                    <a className={style.linkButton} href={props.liveSite}>livesite</a>
                </div>
            </div>
        </div>
    </div>
    );

}
export default ProjectCard;