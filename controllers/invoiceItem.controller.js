import { 
    createInvoiceItemService, 
    deleteInvoiceItemServices, 
    getAllInvoiceItemsService, 
    getInvoiceItemByIdService, 
    getInvoiceItemsByParams, 
    updateInvoiceItemService } from "../services/invoiceItem.services.js";
import HTTP_STATUS from "../utils/http.utils.js";


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const createItemController = async (req, res) => {
    try {
        let item = await createInvoiceItemService(req.body);
        res
        .status(HTTP_STATUS.CREATED.statusCode)
        .send(item);
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
export const getItemByIdController = async (req, res) => {
    let { id } = req.params;

    if(!id){
        res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
        return;
    }

    try {
        let item = await getInvoiceItemByIdService(id);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(item)
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
export const getAllItemsController = async(req, res) => {
    
    if(Object.keys(req.query).length !== 0 && req.query.constructor === Object){
        try {
            let  items = await getInvoiceItemsByParams(req.query);
            res
            .status(HTTP_STATUS.OK.statusCode)
            .send(items)
            return;
        } catch (error) {
          console.log(error);
          res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
          return;
        }
    }

    try {
        let items = await getAllInvoiceItemsService(req.body);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(items)
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
export const updateItemController = async (req, res) => {
    try {
        let item = await updateInvoiceItemService(req.params.id, req.body);
        res
        .send(item)
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
export const deleteItemController = async (req, res) => {
    try {
        let item = await deleteInvoiceItemServices(req.params.id);
        res
        .status(HTTP_STATUS.NO_CONTENT.statusCode)
        .send(item)
        return;
    } catch (error) {
        console.log(error);
        res
        .sendStatus(HTTP_STATUS.BAD_REQUEST.statusCode);
        return;
    }
}
