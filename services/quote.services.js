import {prisma} from '../config/config.js';
const quoteClient = prisma.quote;


const LIMIT = 100;
const ORDER ="desc";
const SORT_BY = "createdAt"

/**
 * Create an quote
 * @param body 
 * @returns 
 */
export const createQuoteService = async (body)=>{
    try {
        let quote = await quoteClient.create({
            data:body
        });
        return quote;
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
        let quotes = await quoteClient.findMany({
            where:{isActive:true},
            skip: parseInt(skip),
            take: parseInt(LIMIT),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await quoteClient.count({
            where:{isActive:true}
        });
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / LIMIT),
            total,
            data: quotes,
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
export const getQuotesByIdService = async(id) =>{
    try {
        let quote = await quoteClient.findFirst({
            where:{id, isActive: true},
        });
        if (!quote) throw new Error(`No application found.`)
        return quote;
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
export const getQuotesByParams = async (request) =>{
    const { page = 1, limit = LIMIT, sortBy = SORT_BY, order=ORDER, ...queries } = request; 
    const skip = (page - 1) * limit;
    try {
        let quotes = await quoteClient.findMany({
            where:queries,
            skip: parseInt(skip),
            take: parseInt(limit),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await quoteClient.count({
            where:{isActive:true}
        });;
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            total,
            data: quotes,
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
export const updateQuoteService = async (id, body) =>{
    try {
        let quote = await quoteClient.update({
            where:{id},
            data:body
        });
        return quote;
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
export const deleteQuoteServices = async (id) =>{
    try {
        let quote = await quoteClient.update({
            where: {id},
            data:{isActive:false}
        });
        return quote
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}