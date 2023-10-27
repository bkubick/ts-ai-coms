/**
 * @fileoverview Types used across the various models in the AI module.
 */

/**
 * The request data for the GPT chatbot.
 * 
 * @property {Object} headers The headers of the request.
 * @property {Object} data The data of the request.
 * 
 * @template T The type of the data of the request.
 */
interface Request<T> {
    headers: object;
    data: T
}


export { type Request };
