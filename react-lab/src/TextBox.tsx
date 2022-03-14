import './App.css';

type labelAndSetter = {
  label: string,
  change: Function
}

function TextBox(props: labelAndSetter) {
  return (
    <div className="TextBox">
      <label htmlFor="textbox">{props.label}: </label>
      <input type="text" name="textbox" id="textbox" onChange={(e) => 
        {props.change(e.target.value)}}></input>
    </div>
  );
}

export default TextBox;
