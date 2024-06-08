import useWindowResize from "."

export default function TestUseWindowResize(){
    const {width, height} = useWindowResize();

    return(
        <div style={{color: "#000"}}>
            <h1>Use window resize hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    )
}