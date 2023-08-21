/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export const ProductSchema = new mongoose.Schema({
  //this is js type
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  image: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
  },
});
//interface this is tyoescript type
export interface Product {
  user: Object;
  id: string;
  title: string;
  description: string;
  // price: number;
  image: string;
}
