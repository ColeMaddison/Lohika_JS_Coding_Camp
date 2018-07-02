import { signupRoute } from '../../../routes';
import { postGenerNoHeaders } from '../../commonHandlers/requestGenerator';

export const regSubmit = (data) => {
    console.log('here');
    return fetch(signupRoute, postGenerNoHeaders(data))
}
