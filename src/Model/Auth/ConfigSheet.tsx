import keys from './keysSheet.json';

let config = keys

const getConfig = () => config;

const setConfig = (newConfig: any) => {
    config = { ...config, ...newConfig };
}

export { getConfig, setConfig };