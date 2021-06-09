import { useContext } from "react"
import AppContext from "../AppContext";

function About() {
    const {data} = useContext(AppContext)
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus libero a luctus gravida. Nullam cursus sem in tortor aliquam, at pulvinar nisi molestie. Vivamus at semper justo, id lacinia magna. Pellentesque consequat, nibh vel tincidunt facilisis, lectus massa ornare elit, quis dapibus dolor lacus vitae lectus. Maecenas vehicula diam vitae erat luctus hendrerit vitae non risus. Cras at venenatis purus. Duis porta venenatis magna vel hendrerit. Integer faucibus ut libero sit amet euismod. Cras sit amet ultrices diam. Nunc eget mauris est. Suspendisse congue porttitor neque non congue. Nam est nisl, scelerisque quis ante sit amet, mattis vehicula diam. Aliquam sodales eget lacus ac condimentum.</p>
        </div>
    )
}

export default About;