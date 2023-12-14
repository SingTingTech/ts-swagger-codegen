/* tslint:disable */
/* eslint-disable */

import fetch from '../utils/fetch';
import {AxiosRequestConfig} from 'axios';

// Some imports not used depending on template conditions
// @ts-ignore
import { User } from '../models';

export class UserApi {
        /**
         * 
         * @param {User} body 
         * @param {*} [config] Override http request option.
         */
        public static addUser(body: User, config?: AxiosRequestConfig) {
            return fetch({
              ...config,
              url: `/user`,
              method: 'POST',
              data: body,
            })
        }
        /**
         * 
         * @param {number} userId 
         * @param {*} [config] Override http request option.
         */
        public static deleteUser(userId: number, config?: AxiosRequestConfig) {
            return fetch({
              ...config,
              url: `/user/${userId}`,
              method: 'DELETE',
            })
        }
        /**
         * 
         * @param {number} userId 
         * @param {*} [config] Override http request option.
         */
        public static getUserById(userId: number, config?: AxiosRequestConfig) {
            return fetch({
              ...config,
              url: `/user`,
              method: 'GET',
              params:{
                userId,
              },
            })
        }
        /**
         * 
         * @param {number} userId 
         * @param {string} name 
         * @param {*} [config] Override http request option.
         */
        public static getUserByIdAndName(userId: number, name: string, config?: AxiosRequestConfig) {
            return fetch({
              ...config,
              url: `/userAndName`,
              method: 'GET',
              params:{
                userId,
                name,
              },
            })
        }
        /**
         * 
         * @param {User} user 
         * @param {*} [config] Override http request option.
         */
        public static patchUser(user: User, config?: AxiosRequestConfig) {
            return fetch({
              ...config,
              url: `/user`,
              method: 'PATCH',
              params:{
                ...user
              },
            })
        }
        /**
         * 
         * @param {User} user 
         * @param {*} [config] Override http request option.
         */
        public static putUser(user: User, config?: AxiosRequestConfig) {
            return fetch({
              ...config,
              url: `/user`,
              method: 'PUT',
              params:{
                ...user
              },
            })
        }
};

