"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = exports.ProductsService = class ProductsService {
    constructor(ProductsModel) {
        this.ProductsModel = ProductsModel;
        this.products = [];
    }
    async insertProduct(user, title, description, image) {
        const newProduct = new this.ProductsModel({
            user,
            title,
            description,
            image: `data:image/jpeg;base64,${image}`,
        });
        const result = await newProduct.save();
        return {
            result,
            success: true,
            text: 'Added SuccessFully',
        };
    }
    async getProducts(pageNo) {
        const resPerPage = 5;
        const currPage = pageNo || 1;
        const skip = resPerPage * (currPage - 1);
        const result = await this.ProductsModel.find().skip(skip).limit(resPerPage);
        return result;
    }
    async getSingleProducts(prodId) {
        if (!prodId) {
            return {
                text: 'Not found',
            };
        }
        const result = await this.ProductsModel.findById(prodId).exec();
        return {
            result,
            text: 'Not found',
        };
    }
    async deleteProduct(prodId) {
        if (!prodId) {
            return {
                text: 'Not found',
            };
        }
        const result = await this.ProductsModel.findByIdAndDelete(prodId).exec();
        return {
            result,
            text: 'Deleted !',
        };
    }
};
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
//# sourceMappingURL=products.service.js.map