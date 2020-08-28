import { GetDogVakcine } from './get-dog-vakcine';
import { GetDogZIvestaj } from './get-dog-zivestaj';
import { GetDogMedicinskiIZvestaj } from './get-dog-medicinski-izvestaj';
import { GetDogHroncineBolesti } from './get-dog-hroncine-bolesti';

export class DogDetails {

        dogName: string;
        ovnerName: string;
        educatorName: string;
        dogDescription: string;
        race: string;
        chip: string;
        vakcine: GetDogVakcine[];
        veterinarskiIzvestaj: GetDogZIvestaj[];
        medicinskiIzvestaj: GetDogMedicinskiIZvestaj[];
        hronicneBolesti: GetDogHroncineBolesti[];
}
