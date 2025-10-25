import Counter from "../components/Counter.js";
import CustomCounter from "../components/CustomCounter.js";

export default function Home() {
    return (
        <main>
            <h1>Sales Dashboard</h1>
            <br/>
            THIS COUNTER STARTS AT 0.
            <Counter/>
            <br/>
            THIS COUNTER STARTS AT 2.
            <CustomCounter/>
        
        </main>
    );
}