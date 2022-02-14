import Card from "../UI/card"
import styles from './listFood.module.css'
import Food from "../food/food"
import Image from "next/image"
import { useContext } from "react"
import GlobalContext from "../../store/GlobalContext"

const ListFood = () =>{
    const ctx = useContext(GlobalContext)
    
    const myLoader = ({ src, width, quality }) => {
        return `/images/${src}?w=${width}&q=${quality || 75}`
    }

    return(
        <Card className={styles['food-container']}>
            {ctx.foods.map(food=>
                <Food
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                >
                    <Image
                        loader={myLoader} 
                        src={food.imgName}
                        alt="Picture of the food"
                        width={500}
                        height={500}
                        objectFit="cover"
                    />
                </Food>
            )}
        </Card>
    )
}

export default ListFood