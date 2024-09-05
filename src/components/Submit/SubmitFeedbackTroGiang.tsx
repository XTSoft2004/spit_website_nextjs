// Import API
import { Button } from "react-bootstrap";
import * as GoogleSheetAPI from "../../Model/Api/GoogleSheetAPI";
import * as config from "../../Model/Auth/ConfigSheet";

import "./style.css";

interface FormData {
  monPhanHoi: string;
  nhomPhanHoi: string;
  noiDung: string;
}

const SubmitFeedbackTroGiang = ({
  monPhanHoi,
  nhomPhanHoi,
  noiDung,
}: FormData) => {
  const formData = {
    monPhanHoi,
    nhomPhanHoi,
    noiDung,
  };

  const handleSubmit = async () => {
    if (Object.values(formData).some((value) => value === null || value === ""))
      alert("Vui lòng nhập đầy đủ thông tin trước khi gửi phản hồi!!!");
    else {
      if (
        (await GoogleSheetAPI.pushDataFeedbackTroGiang(
          formData,
          "PhanHoiTroGiang"
        )) === 200
      )
        alert("Cảm ơn bạn đã gửi phản hồi");
    }
  };

  return (
    <button className="btn-donate me-3" onClick={handleSubmit}>
      Gửi
    </button>
  );
};

export default SubmitFeedbackTroGiang;
