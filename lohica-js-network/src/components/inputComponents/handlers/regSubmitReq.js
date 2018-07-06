import { signupRoute } from '../../../routes';
import { postRequestNoHeaders } from '../../commonHandlers/requestGenerator';

export const regSubmit = (data) => {
    return fetch(signupRoute, postRequestNoHeaders(data))
}
