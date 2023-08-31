import { useState } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import horse from '../assets/icons8-robot-100.png'

const ChooseCharacter = () => {
    const [selected, setSelected] = useState(0)
    const list = [
        {
          title: "Orange",
          img: horse,
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "https://i.scdn.co/image/ab67706c0000da844b854f173573f74063e14264",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: 'https://i.scdn.co/image/ab67706f000000025c3490751b728eea6681c199',
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: 'https://i.scdn.co/image/ab67706c0000da844b854f173573f74063e14264',
          price: "$5.30",
        },
      ];
      console.log(selected)
    return (
        <div className="gap-2 grid grid-cols-2 bg-zinc-700 py-2 px-3 rounded-xl">
          {list.map((item, index) => (
            <Card shadow="md" key={index} isPressable onPress={() => setSelected(index) }>
              <CardBody className={`${selected === index ? 'bg-white' : 'bg-black'} overflow-visible p-0 `}>
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="md:w-full object-cover h-14 md:h-[100px] p-1"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="hidden md:flex text-sm justify-center p-1">
                <b className="text-center">{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    }
export default ChooseCharacter
