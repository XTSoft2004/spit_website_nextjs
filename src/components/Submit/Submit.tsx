// Import API
import { Button } from "react-bootstrap";
import * as GoogleSheetAPI from "../../Model/Api/GoogleSheetAPI";
import * as config from "../../Model/Auth/ConfigSheet";

import "./style.css";

interface FormData {
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

const Submit = ({
  hoten,
  msv,
  ngaysinh,
  gioitinh,
  email,
  sodienthoai,
  diachifb,
  lop,
  diemNMLT,
  diemKTLT,
  gioithieu,
  mongmuon,
  hotro,
}: FormData) => {
  // const submit = async () => {
  //     await GoogleSheetAPI.getAccessToken();
  //     const response = await GoogleSheetAPI.getSheet();
  //     console.log(response);
  // }

  const formData = {
    hoten,
    msv,
    ngaysinh,
    gioitinh,
    email,
    sodienthoai,
    diachifb,
    lop,
    diemNMLT,
    diemKTLT,
    gioithieu,
    mongmuon,
    hotro,
  };

  GoogleSheetAPI.getData();

  const handleSubmit = async () => {
    if (Object.values(formData).some((value) => value === null || value === ""))
      alert("Vui lòng nhập đầy đủ thông tin trước khi gửi đơn đăng ký!!!");
    else {
      if ((await GoogleSheetAPI.pushData(formData)) === 200)
        alert("Đã gửi thông tin đăng ký");
      else alert("Đã xảy ra lỗi khi gửi thông tin đăng ký");
    }
  };

  return (
    <button className="btn-donate me-3" onClick={handleSubmit}>
      Gửi
    </button>
  );
};

export default Submit;