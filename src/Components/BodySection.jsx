import Card from "./Cards"
import carddata from "../data"
export default function Body() {
    return (
        <div>

            {
                carddata.map((card, index) => {
                    return <Card
                        key={index}
                        {...card}
                    />
                })
            }
        </div>
    )
}