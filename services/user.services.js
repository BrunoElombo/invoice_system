import {prisma} from '../config/config.js';
const userClient = prisma.user;


const LIMIT = 100;
const ORDER ="desc";
const SORT_BY = "createdAt"

/**
 * Create a user
 * @param body 
 * @returns 
 */
export const createUserService = async (body)=>{
    try {
        let user = await userClient.create({
            data:body
        });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}


/**
 * 
 * @returns 
 */
export const getAllUsersService = async(body) =>{
    const page = 1;
    const skip = (page - 1) * LIMIT;

    try {
        let users = await userClient.findMany({
            skip: parseInt(skip),
            take: parseInt(LIMIT),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await userClient.count();
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / LIMIT),
            total,
            data: users,
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
export const getUserByIdService = async(id) =>{
    try {
        let user = await userClient.findFirst({
            where:{id},
        });
        if (!user) throw new Error(`No user found.`)
        return user;
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
export const getUsersByParams = async (request) =>{
    const { page = 1, limit = LIMIT, sortBy = SORT_BY, order=ORDER, ...queries } = request; 
    const skip = (page - 1) * limit;
    try {
        let users = await userClient.findMany({
            where:queries,
            skip: parseInt(skip),
            take: parseInt(limit),
            orderBy:{
                createdAt:'desc'
            }
        });
        const total = await userClient.count();
        return {
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            total,
            data: users,
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
export const updateUserService = async (id, body) =>{
    try {
        let user = await userClient.update({
            where:{id},
            data:body
        });
        return user;
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
export const deleteUserServices = async (id) =>{
    try {
        let user = await userClient.delete({
            where: {id}
        });
        return user
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}