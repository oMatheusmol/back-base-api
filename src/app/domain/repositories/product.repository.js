'use strict';
const mssql = require('mssql');

const BaseRepository = require('./base.repository');
const _ = require('lodash');
const { find } = require('lodash');

/**
 * @author Matheus Mol
*/

module.exports = class ProductRepository extends BaseRepository {

  constructor() {
    super();
  }

  async post (body) { 
    try {
      
      const sqlText = this.getSqlText('../sqls/insert.product.sql');
      const conn = await this.openConnection();
      const result = await conn.request()
        .input('productName', mssql.VarChar, body.productName)
        .input('price', mssql.Money, body.price)
        .input('amount', mssql.Int, body.amount)
        .query(sqlText); 
        const verify = result.recordset[0].CodigoProduct;
        
        if(verify === undefined) return null;

        return verify;        

    } catch (error){
      return error.message;
    }
  } 
  

  async get(params) {

    try {

      const sqlText = this.getSqlText('../sqls/product-get.sql') + 'WHERE productName = @productName';
      const conn = await this.openConnection();
      const result = await conn.request()
      .input('productName', mssql.VarChar, params)
      .query(sqlText)

      return result.recordset;

    } catch (err) {
      this.handleError(err);
    }
  }

  async put(body) {

    try {
      const sqlText = this.getSqlText('../sqls/product-put.sql');
      const conn = await this.openConnection();
      const result = await conn.request()
      .input('productName', mssql.VarChar, body.productName)
      .input('id', mssql.Int, body.id)
      .query(sqlText);

      return result.recordset;

    } catch (err) {
      this.handleError(err);
    }
  }

  async delete(body) {

    try {
      const sqlText = this.getSqlText('../sqls/product-delete.sql');
      const conn = await this.openConnection();
      const result = await conn.request()
      .input('id', mssql.Int, body.id)
      .query(sqlText);

      return result.recordset;

    } catch (err) {
      this.handleError(err);
    }
  }

}