import Counter from "../components/Counter.js";
import CustomCounter from "../components/CustomCounter.js";

export default function Home() {
    return (
        <main>
            <h1>Sales Dashboard</h1>
            <br/>
            <Counter/>
            <br/>
            <CustomCounter/>
        
        </main>
    );
}