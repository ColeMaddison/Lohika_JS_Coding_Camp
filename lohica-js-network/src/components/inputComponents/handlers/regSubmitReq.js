import { signupRoute } from '../../../routes';
import { postGener } from '../../commonHandlers/requestGenerator';

export const regSubmit = (data) => {
    fetch(signupRoute, postGener (data))
        .then(dataRes => dataRes.json())
        .then(data => {
            return data;
        });
}

console.log(regSubmit());