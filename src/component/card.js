function ProjectCard(props) {

    return (
    <div class="project-card">
    <img src={props.el.srcimg} alt="project" />
    <h3>{props.el.name}</h3>
    <p>
    {props.lorem}
    </p>
    <p><aa href="#">Github Link</aa></p>
    </div>
    )
    }
    export default ProjectCard;