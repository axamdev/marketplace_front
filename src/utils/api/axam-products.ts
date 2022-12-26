import { Functions } from "@mui/icons-material";
import axios from "axios";
import {  productsUrl, TOKEN } from "utils/constants";

const params = { 

  }
const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };

//  category_id?: number, id?: number, seller_id?: number
async function  get_products( product_id?: number , category_id?: number, seller_id?: number) : Promise<ProductsResponse>  {
    
    var bodyFormData = new FormData();
	  bodyFormData.append('id', product_id.toString());

   const response = await axios.post( productsUrl,bodyFormData,config);
   console.log("products "+response.data);
   return response.data as ProductsResponse;
  //return data["data"] ;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    get_products,

};
 interface Variant {
    id: string;
    product_id: string;
    attribute_value_ids: string;
    price: string;
    special_price: string;  
    images: any[];
    status: string;
    date_added: string; 
    availability: string;
    images_md: any[];
    images_sm: any[];
    variant_relative_path: any[];
    swatche_type: string;
    swatche_value: string;
    stock: string;
    cart_count: string;
}

 interface MinMaxPrice {
    min_price: number;
    max_price: number;
    special_price: number;
    max_special_price: number;
    discount_in_percentage: number;
}

export interface Productsdata {
    total: string;
    sales: string;
    stock_type: string;
    is_prices_inclusive_tax: string;
    type: string;
    attr_value_ids: string;
    seller_rating: string;
    seller_slug: string;
    seller_no_of_ratings: string;
    seller_profile: string;
    store_name: string;
    store_description: string;
    seller_id: string;
    seller_name: string;
    id: string;
    stock: string;
    name: string;
    category_id: string;
    short_description: string;
    slug: string;
    description: string;
    total_allowed_quantity: string;
    status: string;
    deliverable_type: string;
    deliverable_zipcodes: string;
    minimum_order_quantity: string;
    sku: string;
    quantity_step_size: string;
    cod_allowed: string;
    row_order: string;
    rating: string;
    no_of_ratings: string;
    image: string;
    is_returnable: string;
    is_cancelable: string;
    cancelable_till: string;
    indicator: string;
    other_images: string[];
    video_type: string;
    video: string;
    tags: any[];
    warranty_period: string;
    guarantee_period: string;
    made_in: string;
    availability: string;
    category_name: string;
    tax_percentage: string;
    tax_id: string;
    review_images: any[];
    attributes: any[];
    variants: Variant[];
    min_max_price: MinMaxPrice;
    relative_path: string;
    other_images_relative_path: string[];
    video_relative_path: string;
    deliverable_zipcodes_ids: string;
    is_deliverable: boolean;
    is_purchased: boolean;
    is_favorite: string;
    image_md: string;
    image_sm: string;
    other_images_md: string[];
    other_images_sm: string[];
    variant_attributes: any[];
}

export interface ProductsResponse {
    error: boolean;
    message: string;
    min_price: string;
    max_price: string;
    search: string;
    filters: any[];
    tags: any[];
    total: string;
    offset: string;
    data: Productsdata[];
}