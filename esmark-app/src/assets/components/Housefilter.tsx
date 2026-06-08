import { useState, useMemo } from "react";
import Card from "./Card";
import Houses from "../data/sommerhuse.json";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import Dog from '../images/dog-999.svg'
import Persons from '../images/persons-999.svg'

function HousesFilter() {
  
  // Setting default values
  const [pets, setPetsAllowed] = useState({
    petsAllowed: true
  });

  // Setting default values
  const [selected, setSelectedCapacity] = useState(6);

  // Filter
  const filteredHouses = useMemo(() => {
    return Houses.hits.filter((house) => {
      const matchesPetsAllowed =
        !pets.petsAllowed ||
        house.facilities.PetsAllowed === true;

      const matchesHouseCapacity =
        house.facilities.NumberOfPersons === selected;

      return (
        matchesPetsAllowed &&
        matchesHouseCapacity
      );
    });
  }, [selected, pets]);

  const capacityValues = Houses.hits.map(capacity => capacity.facilities.NumberOfPersons);
  const uniqueCapacityValues = capacityValues.filter((capacity, index) => capacityValues.indexOf(capacity) === index);
  const sortedUniqueValues = uniqueCapacityValues.sort((a, b) => a-b);
  

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:pr-6 mb-10 text-left flex-none md:mr-8">
        <h2>Find dit feriehus</h2>
        <div className="grid grid-row gap-4 bg-primary text-white mt-5 py-4 px-6 rounded-md">
          <div className="w-full">
            <Listbox value={selected} onChange={setSelectedCapacity}>
              <div className="relative mt-2 md:mr-10 w-full">
                <ListboxButton className="grid w-full cursor-default rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
                  <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                    <img alt="Personer" src={Persons} className="size-5 shrink-0" />
                    <span className="block truncate">{selected + " person"}{selected === 1 ? "" : "er"}</span>
                  </span>
                  <ChevronUpDownIcon
                    aria-hidden="true"
                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                >

                {sortedUniqueValues.map((item, index) => (
                    <ListboxOption
                      key={index}
                      value={item}
                      className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                    >
                      <div className="flex items-center">
                        <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{item + " person"}{item === 1 ? "" : "er"}</span>
                      </div>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                        <CheckIcon aria-hidden="true" className="size-5" />
                      </span>
                    </ListboxOption>
                ))}
                
              </ListboxOptions>
              </div>
            </Listbox>
          </div>
          
          <div>
            <label className="flex">
              <img alt="Hunde tilladt" src={Dog} className="image-svg size-5 inline"/>
              <input
                className="checkbox ml-3"
                type="checkbox"
                checked={pets.petsAllowed}
                onChange={(e) =>
                  setPetsAllowed({
                    ...pets,
                    petsAllowed: e.target.checked,
                  })
                }
              />
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white/90 rounded-md mb-10 flex-1">
        <div>
          <p className="text-center md:text-left pb-4">{filteredHouses.length == 0 ? "Beklager, men der er ingen sommerhuse der opfylder kriterierne" : "Viser " + filteredHouses.length + " sommerhuse der opfylder kriterierne"}</p>
          {filteredHouses.map((item) => (
            <Card key={item.id} name={item.name} title={item.title} description={item.description} city={item.city} fromprice={item.fromPrice} address={item.address1} postalCode={item.postalCode} imgUrl={item.images[0].url} houseCapacity={item.facilities.NumberOfPersons} petsAllowed={item.facilities.PetsAllowed.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HousesFilter;