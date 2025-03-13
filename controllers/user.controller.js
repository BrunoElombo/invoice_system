import { 
    createUserService, 
    deleteUserServices, 
    getAllUsersService, 
    getUserByIdService, 
    getUsersByParams, 
    updateUserService } from "../services/user.services.js";
import HTTP_STATUS from "../utils/http.utils.js";


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const createUserController = async (req, res) => {
    try {
        let user = await createUserController(req.body);
        res
        .status(HTTP_STATUS.CREATED.statusCode)
        .send(user);
        return;
    } catch (error) {
        console.log(error);
        res
        .status(HTTP_STATUS.BAD_REQUEST.statusCode)
        .send(error)
        return
    }
}

/**
 * 
 * @param req
 * @param res 
 * @returns 
 */
export const getUserByIdController = async (req, res) => {
    let { id } = req.params;

    if(!id){
        res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
        return;
    }

    try {
        let user = await getApplicationByIdService(id);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(user)
        return;
    } catch (error) {
        console.log(error);
        res
        .sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
        return;
    }
}


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const getAllUsersController = async(req, res) => {
    
    if(Object.keys(req.query).length !== 0 && req.query.constructor === Object){
        try {
            let  users = await getUsersByParams(req.query);
            res
            .status(HTTP_STATUS.OK.statusCode)
            .send(users)
            return;
        } catch (error) {
          console.log(error);
          res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
          return;
        }
    }

    try {
        let users = await getAllUsersService(req.body);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(users)
        return
    } catch (error) {
        console.log(error);
        res
        .sendStatus(HTTP_STATUS.BAD_REQUEST.statusCode);
        return;
    }
}


/**
 * 
 * @param req 
 * @param res 
 */
export const updateUserController = async (req, res) => {
    try {
        let user = await updateUserService(req.params.id, req.body);
        res
        .send(user)
        .status(HTTP_STATUS.OK.statusCode);
        return;
    } catch (error) {
        console.log(error);
        res
        .sendStatus(HTTP_STATUS.BAD_REQUEST.statusCode);
        return;
    }
}


/**
 * 
 * @param req 
 * @param res 
 */
export const deleteUserController = async (req, res) => {
    try {
        let user = await deleteUserServices(req.params.id);
        res
        .status(HTTP_STATUS.NO_CONTENT.statusCode)
        .send(user)
        return;
    } catch (error) {
        console.log(error);
        res
        .sendStatus(HTTP_STATUS.BAD_REQUEST.statusCode);
        return;
    }
}
