import './Style.css'

function Section (props) {
return <div class = "dot" style={{'background-color': props.colorName}}>{props.colorName}</div>
}

export default Section