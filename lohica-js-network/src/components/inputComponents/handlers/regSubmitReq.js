import { signupRoute } from '../../../routes';
import { postGenerNoHeaders } from '../../commonHandlers/requestGenerator';

export const regSubmit = (data) => {
    return fetch(signupRoute, postGenerNoHeaders(data))
}
