import Image from "next/image";
import Counter from "../components/Counter.js";

export default function Home() {
    return (
        <main>
            <h1>Sales Dashboard</h1>
            <Counter/>
            <Counter/>
        </main>
    );
}