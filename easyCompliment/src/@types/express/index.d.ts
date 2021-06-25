/**
 * This file was created so that you can use everything 
 * that is already created by default within the path: 
 * node_modules\@types\express\ts4.0\index.d.ts 
 * and also the user_id which is of type string.
 * That is, everything that comes by default in this index.d.ts 
 * that is inside node_modules and also this user_id variable 
 * will be used. This is designed to be used in ensureAuthenticated middleware
 */

/**
 * IMPORTANT: Navegue até tsconfig.json e descomente o
 * "typeRoots": [], e logo após coloque o caminho criado.
 * Ficará da seguinte forma: "typeRoots": ["./src/@types"]
 */
declare namespace Express {
    export interface Request {
        user_id: string;
    }
}