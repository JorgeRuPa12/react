import { Component } from "react"

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <img style={{width:"450px", height:"400px"}}
                src={"https://www.assemblyai.com/blog/content/images/2022/07/How-Imagen-Actually-Works.png"}/>
            </div>
        )
    }
}

export default Home;