import DefaultProps from "./DefaultProps";
import HtmlProps from "./HtmlProps";

function DefaultPropss() {
    return (
        <div>
            <DefaultProps name="Bumrah" />
            <DefaultProps /> 
            {/* here name is not passed so it will take the value of default. */}

            
            <HtmlProps>
                <h1 style={{color:"blue"}} > Hello Html</h1>
            </HtmlProps>

            <HtmlProps>
                <h1>Hello Jaddu</h1>
            </HtmlProps>

            <HtmlProps>
                <h1>Hello Sam</h1>
            </HtmlProps>

            <HtmlProps>
                <h1>Hello Ben</h1>
            </HtmlProps>
        </div>
    );
}

export default DefaultPropss;
