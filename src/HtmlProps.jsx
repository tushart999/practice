function HtmlProps({children,color="pink"}){
    return <div style={{color:color,border:"5px solid black"}}>
    {children}
    </div>
}

export default HtmlProps