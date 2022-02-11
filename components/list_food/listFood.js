import Card from "../UI/card"
import styles from './listFood.module.css'
import Food from "../food/food"
import Image from "next/image"

const ListFood = () =>{
    const myLoader = ({ src, width, quality }) => {
        return `/images/${src}?w=${width}&q=${quality || 75}`
    }
    const image = "food.jpeg"

    return(
        <Card className={styles['food-container']}>
            <Food>
                <Image
                    loader={myLoader} 
                    src={image}
                    alt="Picture of the food"
                    width={500}
                    height={500}
                    objectFit="cover"
                />
            </Food>
            <Food>
                <Image
                    loader={myLoader} 
                    src={image}
                    alt="Picture of the food"
                    width={500}
                    height={500}
                    objectFit="cover"
                />
            </Food>
            <Food>
                <Image
                    loader={myLoader} 
                    src={image}
                    alt="Picture of the food"
                    width={500}
                    height={500}
                    objectFit="cover"
                />
            </Food>
            <Food>
                <Image
                    loader={myLoader} 
                    src={image}
                    alt="Picture of the food"
                    width={500}
                    height={500}
                    objectFit="cover"

                />
            </Food>
            <Food>
                <Image
                    loader={myLoader} 
                    src={image}
                    alt="Picture of the food"
                    width={500}
                    height={500}
                    objectFit="cover"
                />
            </Food>
            <Food>
                <Image
                    loader={myLoader} 
                    src={image}
                    alt="Picture of the food"
                    width={500}
                    height={500}
                    objectFit="cover"
                />
            </Food>
        </Card>
    )
}

export default ListFood