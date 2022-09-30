import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

export const Sobre = () => {
    return(
        <>
        <Menu />
        <main>
           <h1>Página Sobre</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Praesentium, odio quibusdam! 
            Corrupti nisi aperiam perspiciatis animi minima commodi reprehenderit maxime totam vero recusandae minus, similique eos cupiditate dolorum. 
            Nobis, doloribus.
            </p>
            <Card />
        </main>
        <Footer />

        </>
    )
};