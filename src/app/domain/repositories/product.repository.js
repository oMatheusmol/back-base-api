'use strict';
const mssql = require('mssql');

const BaseRepository = require('./base.repository');
const _ = require('lodash');
const { find } = require('lodash');
const arrayUtil = require('../../utils/arrayUtil');
const database = require('../../../infrastructure/database/mongoFactory');

/**
 * @author Matheus Mol
*/

module.exports = class ProductRepository {

  constructor() {
  }
  
  async post (body) { 
    try {
      const collectionName = 'products';
      const product = body;
      await database.getCollection(collectionName).insertOne(product);
      return true;
            
    } catch (error){
      return false;
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