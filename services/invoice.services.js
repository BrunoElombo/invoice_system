import {prisma} from '../config/config.js';
const invoiceClient = prisma.invoice;


const LIMIT = 100;
const ORDER ="desc";
const SORT_BY = "createdAt"

/**
 * Create an invioice
 * @param body 
 * @returns 
 */
export const createInvoiceService = async (body)=>{
    try {
        let invoice = await invoiceClient.create({
            data:body
        });
        return invoice;
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}


/**
 * 
 * @returns 
 */
export const getAllInvoicesService = async(body) =>{
    const page = 1;
    const skip = (page - 1) * LIMIT;

    try {
        let invoices = await invoiceClient.findMany({
            skip: parseInt(skip),
            take: parseInt(LIMIT),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await invoiceClient.count({});
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / LIMIT),
            total,
            data: invoices,
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
export const getInvoiceByIdService = async(id) =>{
    try {
        let invoice = await invoiceClient.findFirst({
            where:{id}
        });
        if (!invoice) throw new Error(`No application found.`)
        return invoice;
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
export const getInvoicesByParams = async (request) =>{
    const { page = 1, limit = LIMIT, sortBy = SORT_BY, order=ORDER, ...queries } = request; 
    const skip = (page - 1) * limit;
    try {
        let invoices = await invoiceClient.findMany({
            where:queries,
            skip: parseInt(skip),
            take: parseInt(limit),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await invoiceClient.count();
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            total,
            data: invoices,
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
export const updateInvoiceService = async (id, body) =>{
    try {
        let invoice = await invoiceClient.update({
            where:{id},
            data:body
        });
        return invoice;
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
export const deleteInvoiceServices = async (id) =>{
    try {
        let invoice = await invoiceClient.delete({
            where: {id}
        });
        return invoice
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}