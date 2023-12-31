import {useParams} from 'react-router-dom';
import planets from '../data/planets.json';

export default () => {

    const { id } = useParams();

    const planet = planets.find((planet) => planet.id == id);

    return (
        <div class="flex items-center justify-center h-screen">
        <div class="bg-gray-800 text-white font-bold rounded-lg border shadow-lg p-10">
           <p className='mb-2'><b>Nome: </b>{planet.name}</p>
           <div class="bg-indigo flex space-x-4">
             <img className="object-cover h-48 w-96 mr-1" src={planet.image} />
             <div> {planet.description} </div>
            </div>
        </div>
        </div>
    );
}
