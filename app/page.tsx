import Counter from "../components/Counter.js";
import CustomCounter from "../components/CustomCounter.js";

export default function Home() {
    return (
        <main>
            <h1>Sales Dashboard</h1>
            <h3>This counter starts at 0.</h3>
            <Counter/>
            <br/>
            <h3>This counter starts at 2.</h3>
            <CustomCounter/>
        
        </main>
    );
}