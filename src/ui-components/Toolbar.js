import IconButton from "./IconButton";
import css from "./toolbar.module.css";

function Toolbar(props) {
    let className = css.container;
    props.location.forEach(item => {
        className += ' ' + css[item];
    });

    // Check if props.list is defined before mapping over it
    if (!props.list) {
        return null; // Or handle the case when props.list is not defined
    }

    return (
        <div className={className}>
            {props.list.map(item => (
                <div className={css.button} key={item.name}>
                    <IconButton
                        name={item.name}
                        onClick={item.onClick}
                        type={props.type}
                    />
                </div>
            ))}
        </div>
    );
}

export default Toolbar;
