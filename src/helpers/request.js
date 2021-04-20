/**
 * @component       Request
 * @description     Helper function to sent request with post/get methods to URL
 *
 * @author          Steven van Bennekom <https://stevenvanbennekom.nl>
 */

import isEmpty from "lodash/isEmpty";
import forEach from "lodash/forEach";
import fetch from "isomorphic-fetch";

const Request = (configuration) => {
    if (validateConfiguration(configuration)) {
        configuration.extension = configuration.extension.replace('https://pokeapi.co/api/v2/', '');
        let url = 'https://pokeapi.co/api/v2/' + configuration.extension;

        const options = {
            method: configuration.method,
        };

        if (configuration.method === 'POST') {
            let headers = (configuration.hasOwnProperty('headers') ? configuration.headers : {});
            headers.accept = "application/json";

            options.headers = headers;
            options.body = JSON.stringify(configuration.params);
        }

        if (configuration.method === 'GET') {
            let paramStr = '';
            forEach(configuration.params, (value, key) => {
                if (paramStr.length > 0) {
                    paramStr += '&';
                }
                paramStr += key + "=" + value;
            });

            if (isEmpty(paramStr) === false) {
                url += "?" + paramStr;
            }
        }

        return fetch(url, options).catch((error) => {
            console.error(error)
        });
    }

    return false;
};

function validateConfiguration(configuration) {
    const requiredField = ['extension', 'method'];
    const defaultValues = {
        'method': 'GET'
    }
    const customMessages = {
        "api": "The api field is required, choose one from the configuration file or add one."
    };

    let errors = 0;

    forEach(defaultValues, (defaultValue, key) => {
        if (configuration.hasOwnProperty(key) === false || isEmpty(configuration[key]) === true) {
            configuration[key] = defaultValue;
        }
    });

    forEach(requiredField, (key) => {
        if (configuration.hasOwnProperty(key) === false || isEmpty(configuration[key]) === true) {
            console.error(`Request:: ${key} is required.`);
            errors++;
        }
    });

    forEach(customMessages, (message, key) => {
        if (configuration.hasOwnProperty(key) === false || isEmpty(configuration[key]) === true) {
            console.error(message);
            errors++;
        }
    });

    if (configuration.method !== 'POST' && configuration.method !== 'GET') {
        console.error(`Request:: ${configuration.method} is not a valid value for method.`);
        errors++;
    }

    return errors === 0;
}

export {Request as default};
