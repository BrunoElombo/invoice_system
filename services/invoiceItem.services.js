import {prisma} from '../config/config.js';
const invoiceItemClient = prisma.invoice_item;


const LIMIT = 100;
const ORDER ="desc";
const SORT_BY = "createdAt"

/**
 * Create an invioice
 * @param body 
 * @returns 
 */
export const createInvoiceItemService = async (body)=>{
    try {
        let invoiceItem = await invoiceItemClient.create({
            data:body
        });
        return invoiceItem;
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}


/**
 * 
 * @returns 
 */
export const getAllInvoiceItemsService = async(body) =>{
    const page = 1;
    const skip = (page - 1) * LIMIT;

    try {
        let invoiceItems = await invoiceItemClient.findMany({
            skip: parseInt(skip),
            take: parseInt(LIMIT),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await invoiceItemClient.count();
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / LIMIT),
            total,
            data: invoiceItems,
        };
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`)
    }
}

/**
 * 
 * @param id 
 * @returns 
 */
export const getInvoiceItemByIdService = async(id) =>{
    try {
        let invoiceItem = await invoiceItemClient.findFirst({
            where:{id},
        });
        if (!invoiceItem) throw new Error(`No application found.`)
        return invoiceItem;
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}

/**
 * 
 * @param request 
 * @returns 
 */
export const getInvoiceItemsByParams = async (request) =>{
    const { page = 1, limit = LIMIT, sortBy = SORT_BY, order=ORDER, ...queries } = request; 
    const skip = (page - 1) * limit;
    try {
        let invoiceitems = await invoiceItemClient.findMany({
            where:queries,
            skip: parseInt(skip),
            take: parseInt(limit),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await invoiceItemClient.count();
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            total,
            data: invoiceitems,
        };
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}

/**
 * 
 * @param id 
 * @param body 
 * @returns 
 */
export const updateInvoiceItemService = async (id, body) =>{
    try {
        let invoiceItem = await invoiceItemClient.update({
            where:{id},
            data:body
        });
        return invoiceItem;
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`);
    }
}

/**
 * 
 * @param id 
 * @returns 
 */
export const deleteInvoiceItemServices = async (id) =>{
    try {
        let invoiceItem = await invoiceItemClient.delete({ where: {id}});
        return invoiceItem
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}