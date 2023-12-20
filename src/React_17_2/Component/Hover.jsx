// eslint-disable-next-line react/prop-types
export default function Hover({theme, switchTheme}) {
    const style = theme== "dark"?{backgroundColor: '#000000', color:'#ffffff'}:null;
    return(
        <div>
            <h1 style={style}>This is Hover</h1>
            <button type="button" onClick={switchTheme}>Change Theme</button>
        </div>
    )
}