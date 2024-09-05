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

const SubmitRegForm = ({
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

  const handleSubmit = async () => {
    if (Object.values(formData).some((value) => value === null || value === ""))
      alert("Vui lòng nhập đầy đủ thông tin trước khi gửi đơn đăng ký!!!");
    else {
      if ((await GoogleSheetAPI.pushDataReg(formData, "DanhSachDonTuyenThanhVien")) === 200)
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

export default SubmitRegForm;
