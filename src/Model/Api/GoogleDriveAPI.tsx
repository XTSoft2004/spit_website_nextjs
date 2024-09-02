"use client";

import * as config from '../Auth/ConfigData';
import axios from 'axios';

// Define the FileData type
type FileData = {
    id: string;
    parents: string;
    name: string;
    mimeType: string;
    size: number | null;
    createdTime: string;
    modifiedTime: string;
};

// Get new access token
const getAccessToken = async () => {
    try {
        const response = await axios.post(`https://oauth2.googleapis.com/token`, {
            client_id: config.getConfig().infoToken.client_id,
            client_secret: config.getConfig().infoToken.client_secret,
            refresh_token: config.getConfig().infoToken.refresh_token,
            grant_type: config.getConfig().infoToken.grant_type,
        });

        const data = await response.data;

        config.setConfig({ accessToken: data.access_token });
    }
    catch (error: any) {
        if (error.status === 401)
            await getAccessToken();
        else
            return null;
    }
}

// Get all files * folders in google drive
const getData = async (idFolder: string) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files?q='${idFolder}'+in+parents&pageSize=1000&fields=nextPageToken,files(id,name,mimeType,size,createdTime,modifiedTime,parents)`, {
            headers: {
                'Authorization': `Bearer ${config.getConfig().accessToken}`,
            }
        });

        const data = await response.data;


        const result = data.files.map((d: FileData) => ({
            id: d.id,
            parents: d.parents[0],
            name: d.name,
            mimeType: d.mimeType,
            size: d.size === undefined ? null : d.size,
            createdTime: d.createdTime,
            modifiedTime: d.modifiedTime,
        }));

        console.log(result);
        return result
    }
    catch (error: any) {
        if (error.status === 401) {
            await getAccessToken();
            await getData(idFolder);
        }
        else
            return [];
    }
}

// Get id, name, parents of folder
const getInfoFolder = async (idFolder: string) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${idFolder}?fields=id,name,parents`, {
            headers: {
                'Authorization': `Bearer ${config.getConfig().accessToken}`,
            }
        });

        const data = await response.data;

        return {
            id: data.id,
            name: data.name,
            parents: data.parents == null ? null : data.parents[0],
        }
    } catch (error: any) {
        if (error.status === 401) {
            await getAccessToken();
            await getInfoFolder(idFolder);
        }
        else
            return [];
    }
}

// Search file/folder by name
const search = async (name: string) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files?q=name+contains+'${name}'&fields=files(id,name,mimeType)&orderBy=createdTime`, {
            headers: {
                'Authorization': `Bearer ${config.getConfig().accessToken}`,
            }
        });

        const data = await response.data;

        const folders = data.files.filter((d: FileData) => d.mimeType === 'application/vnd.google-apps.folder');
        const files = data.files.filter((d: FileData) => d.mimeType !== 'application/vnd.google-apps.folder');

        return {
            folder: folders,
            file: files,
        }

    } catch (error: any) {
        if (error.status === 401) {
            await getAccessToken();
            await search(name);
        }
    }
}

export {
    getAccessToken,
    getData,
}