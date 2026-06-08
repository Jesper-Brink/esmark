import Dog from '../images/dog.svg'
import Persons from '../images/persons.svg'

function Card({ name, title, description, fromprice, city, address, postalCode, imgUrl, houseCapacity, petsAllowed } : { name: string, title: string, description: string, fromprice: number, city: string, address: string, postalCode: string, imgUrl: string, houseCapacity: number, petsAllowed: string }) {

  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 mb-10 md:flex-row md:gap-8 shadow-lg border border-gray-200 rounded-0 md:rounded-md">
      <div className="relative basis-full md:basis-1/3 overflow-hidden rounded-0 md:rounded-s-md">
        <img className="md:h-48 w-full object-cover" alt="Billede af sommerhus" title={name} src={"https://img.svc.esmark.dk" + imgUrl} />
        <p className="absolute bottom-5 left-0 bg-secondary text-black py-2 px-4">{"fra" + " " + fromprice + ",-"}</p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 font-small text-gray-600 basis-full md:basis-2/3 text-left pr-0 md:pr-6 tabIndex={0}">
        <p className="line-clamp-2 font-bold">{title}</p>
        <p className="line-clamp-4 text-sm" title={description}>{description}</p>
        <p className="text-sm text-blue-500 pb-4 md:pb-0 line-clamp-1">{address + ", " + postalCode + ", " + city}</p>         
      </div>
      <div className="flex flex-col gap-1 md:gap-2 font-small text-gray-600 text-left pr-0 md:pr-6 tabIndex={0}">
        <div className="flex"><img src={Persons} className="w-5 mr-2" /><p>{houseCapacity}</p></div>
        <div className="flex"><img src={Dog} className="w-5 mr-2" /><p>{petsAllowed ? "Ja" : "Nej"}</p></div>
      </div>
    </div> 
  )
}

export default Card