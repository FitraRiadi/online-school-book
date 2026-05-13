import GifAnim from "./../assets/gif/pengu-pudgy.gif"

export default function NotFound(){
    return (
        <div className="d-flex justify-content-center align-items-center " style={{height:"90vh"}}>
            <img src={GifAnim} alt="" style={{height:"100px"}} />
            <h1>Page Not Found</h1>
        </div>
    )
}