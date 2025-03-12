import { 
    createInvoiceService, 
    deleteInvoiceServices, 
    getAllInvoicesService, 
    getInvoiceByIdService, 
    getInvoicesByParams, 
    updateInvoiceService } from "../services/invoice.services.js";
import HTTP_STATUS from "../utils/http.utils.js";


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const createInvoiceController = async (req, res) => {
    try {
        let invoice = await createInvoiceService(req.body);
        res
        .status(HTTP_STATUS.CREATED.statusCode)
        .send(invoice);
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
export const getInvoiceByIdController = async (req, res) => {
    let { id } = req.params;

    if(!id){
        res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
        return;
    }

    try {
        let invoice = await getInvoiceByIdService(id);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(invoice)
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
export const getAllInvoicesController = async(req, res) => {
    
    if(Object.keys(req.query).length !== 0 && req.query.constructor === Object){
        try {
            let invoices = await getInvoicesByParams(req.query);
            res
            .status(HTTP_STATUS.OK.statusCode)
            .send(invoices)
            return;
        } catch (error) {
          console.log(error);
          res.sendStatus(HTTP_STATUS.NOT_FOUND.statusCode);
          return;
        }
    }

    try {
        let invoices = await getAllInvoicesService(req.body);
        res
        .status(HTTP_STATUS.OK.statusCode)
        .send(invoices)
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
export const updateInvoiceController = async (req, res) => {
    try {
        let invoice = await updateInvoiceService(req.params.id, req.body);
        res
        .send(invoice)
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
export const deleteInvoiceController = async (req, res) => {
    try {
        let invoice = await deleteInvoiceServices(req.params.id);
        res
        .status(HTTP_STATUS.NO_CONTENT.statusCode)
        .send(invoice)
        return;
    } catch (error) {
        console.log(error);
        res
        .sendStatus(HTTP_STATUS.BAD_REQUEST.statusCode);
        return;
    }
}
