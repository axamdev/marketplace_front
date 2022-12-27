import axios from "axios";
import {  sectionsUrl, TOKEN } from "utils/constants";

const params = { 

  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
const getAllSections = async () => {
   const response = await axios.post( sectionsUrl,params,config);
//    console.log("sections"+response.data);
   return response.data as SectionsResponse;
  //return data["data"] ;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getAllSections,

};


     interface Filter {
        attribute_values: string;
        attribute_values_id: string;
        name: string;
        swatche_type: string;
        swatche_value: string;
    }

     interface Attribute {
        ids: string;
        value: string;
        attr_name: string;
        name: string;
        swatche_type: string;
        swatche_value: string;
    }

     interface Variant {
        id: string;
        product_id: string;
        attribute_value_ids: string;
        price: string;
        special_price: string;
        images: string[];
        status: string;
        date_added: string;
        variant_ids: string;
        attr_name: string;
        variant_values: string;
        swatche_type: string;
        swatche_value: string;
        availability: string;
        images_md: string[];
        images_sm: string[];
        variant_relative_path: string[];
        stock: string;
        cart_count: string;
        sku: string;
    }

     interface MinMaxPrice {
        min_price: number;
        max_price: number;
        special_price: number;
        max_special_price: number;
        discount_in_percentage: number;
    }

     interface VariantAttribute {
        ids: string;
        values: string;
        swatche_type: string;
        swatche_value: string;
        attr_name: string;
    }

    export interface ProductDetail {
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
        tags: string[];
        warranty_period: string;
        guarantee_period: string;
        made_in: string;
        availability: any;
        category_name: string;
        tax_percentage: string;
        tax_id: string;
        review_images: any[];
        attributes: Attribute[];
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
        other_images_sm: string[];
        other_images_md: string[];
        variant_attributes: VariantAttribute[];
        total: string;
    }

    export interface DataSections {
        id: string;
        title: string;
        short_description: string;
        style: string;
        product_ids: string;
        row_order: string;
        categories: string;
        product_type: string;
        date_added: string;
        total: string;
        filters: Filter[];
        product_details: ProductDetail[];
    }

    export interface SectionsResponse {
        error: boolean;
        message: string;
        min_price: string;
        max_price: string;
        data: DataSections[];
    }



