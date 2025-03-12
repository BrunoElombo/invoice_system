import { 
    createQuoteService, 
    deleteQuoteServices, 
    getAllInvoicesService, 
    getQuotesByIdService, 
    getQuotesByParams, 
    updateQuoteService } from "../services/quote.services.js";
import HTTP_STATUS from "../utils/http.utils.js";


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const createQuoteController = async (req, res) => {
    try {
        let quote = await createQuoteService(req.body);
        res
        .status(HTTP_STATUS.CREATED.statusCode)
        .send(quote);
        return;
    } catch (error) {
        console.log(error);
        res.sendStatus(HTTP_STATUS.BAD_REQUEST.statusCode);
        return
    }
}

/**
 * 
 * @param req
 * @param res 
 * @returns 
 */
export const getQuoteByIdController = async (req, res) => {
    let { id } = req.params;

    if(!id){
        res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
        return;
    }

    try {
        let quote = await getQuotesByIdService(id);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(quote)
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
export const getAllQuotesController = async(req, res) => {
    
    if(Object.keys(req.query).length !== 0 && req.query.constructor === Object){
        try {
            let  quotes = await getQuotesByParams(req.query);
            res
            .status(HTTP_STATUS.OK.statusCode)
            .send(quotes)
            return;
        } catch (error) {
          console.log(error);
          res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
          return;
        }
    }

    try {
        let quotes = await getAllInvoicesService(req.body);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(quotes)
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
export const updateQuoteController = async (req, res) => {
    try {
        let quote = await updateQuoteService(req.params.id, req.body);
        res
        .send(quote)
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
export const deleteQuoteController = async (req, res) => {
    try {
        let quote = await deleteQuoteServices(req.params.id);
        res
        .status(HTTP_STATUS.NO_CONTENT.statusCode)
        .send(quote)
        return;
    } catch (error) {
        console.log(error);
        res
        .sendStatus(HTTP_STATUS.BAD_REQUEST.statusCode);
        return;
    }
}
