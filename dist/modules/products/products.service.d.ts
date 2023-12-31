/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Product } from './product.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly ProductsModel;
    private products;
    constructor(ProductsModel: Model<Product>);
    insertProduct(user: object, title: string, description: string, image: string): Promise<{
        result: import("mongoose").Document<unknown, {}, Product> & Product & {
            _id: import("mongoose").Types.ObjectId;
        };
        success: boolean;
        text: string;
    }>;
    getProducts(pageNo: number): Promise<(import("mongoose").Document<unknown, {}, Product> & Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSingleProducts(prodId: string): Promise<{
        text: string;
        result?: undefined;
    } | {
        result: import("mongoose").Document<unknown, {}, Product> & Product & {
            _id: import("mongoose").Types.ObjectId;
        };
        text: string;
    }>;
    deleteProduct(prodId: string): Promise<{
        text: string;
        result?: undefined;
    } | {
        result: import("mongoose").Document<unknown, {}, Product> & Product & {
            _id: import("mongoose").Types.ObjectId;
        };
        text: string;
    }>;
}
