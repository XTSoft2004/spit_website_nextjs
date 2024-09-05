import * as config from "../Auth/ConfigSheet";
import axios from "axios";

interface FormDataReg {
  hoten: string;
  msv: string;
  ngaysinh: string;
  gioitinh: string;
  email: string;
  sodienthoai: string;
  diachifb: string;
  lop: string;
  diemNMLT: string;
  diemKTLT: string;
  gioithieu: string;
  mongmuon: string;
  hotro: string;
}

interface FormDataFeedbackCLB {
  noiDung: string;
}

interface FormDataFeedbackTroGiang {
  monPhanHoi: string;
  nhomPhanHoi: string;
  noiDung: string;
}

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
  } catch (error: any) {
    if (error.status === 401) await getAccessToken();
    else return null;
  }
};

// Get data from Google Sheet
const getData = async (sheetName: string) => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${
        config.getConfig().spreadsheetId
      }/values/${sheetName}`,
      {
        headers: {
          Authorization: `Bearer ${config.getConfig().accessToken}`,
        },
      }
    );

    return response.status;
  } catch (error: any) {
    if (error.status === 401) {
      await getAccessToken();
      await getData(sheetName);
    } else return null;
  }
};

// Push data to Google Sheet
const pushDataReg = async (formData: FormDataReg, sheetName: string) => {
  const birthday = new Date(formData.ngaysinh);
  const date = new Date().toLocaleDateString("en-GB");
  const time = new Date().toLocaleTimeString("en-GB");

  try {
    const response = await axios.post(
      `https://sheets.googleapis.com/v4/spreadsheets/${
        config.getConfig().spreadsheetId
      }/values/${sheetName}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        values: [
          [
            formData.hoten,
            formData.msv,
            birthday,
            formData.gioitinh,
            formData.email,
            `'${formData.sodienthoai}`,
            formData.diachifb,
            formData.lop,
            formData.diemNMLT,
            formData.diemKTLT,
            formData.gioithieu,
            formData.mongmuon,
            formData.hotro,
            `${date} ${time}`,
          ],
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${config.getConfig().accessToken}`,
        },
      }
    );

    return response.status;
  } catch (error: any) {
    if (error.status === 401) {
      await getAccessToken();
      await pushDataReg(formData, sheetName);
    } else return null;
  }
};

const pushDataFeedbackCLB = async (
  formData: FormDataFeedbackCLB,
  sheetName: string
) => {
  const date = new Date().toLocaleDateString("en-GB");
  const time = new Date().toLocaleTimeString("en-GB");

  try {
    const response = await axios.post(
      `https://sheets.googleapis.com/v4/spreadsheets/${
        config.getConfig().spreadsheetId
      }/values/${sheetName}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        values: [[formData.noiDung, `${date} ${time}`]],
      },
      {
        headers: {
          Authorization: `Bearer ${config.getConfig().accessToken}`,
        },
      }
    );

    return response.status;
  } catch (error: any) {
    if (error.status === 401) {
      await getAccessToken();
      await pushDataFeedbackCLB(formData, sheetName);
    } else return null;
  }
};

const pushDataFeedbackTroGiang = async (
  formData: FormDataFeedbackTroGiang,
  sheetName: string
) => {
  const date = new Date().toLocaleDateString("en-GB");
  const time = new Date().toLocaleTimeString("en-GB");

  try {
    const response = await axios.post(
      `https://sheets.googleapis.com/v4/spreadsheets/${
        config.getConfig().spreadsheetId
      }/values/${sheetName}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        values: [
          [
            formData.monPhanHoi,
            formData.nhomPhanHoi,
            formData.noiDung,
            `${date} ${time}`,
          ],
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${config.getConfig().accessToken}`,
        },
      }
    );

    return response.status;
  } catch (error: any) {
    if (error.status === 401) {
      await getAccessToken();
      await pushDataFeedbackTroGiang(formData, sheetName);
    } else return null;
  }
};

export {
  getAccessToken,
  getData,
  pushDataReg,
  pushDataFeedbackCLB,
  pushDataFeedbackTroGiang,
};
