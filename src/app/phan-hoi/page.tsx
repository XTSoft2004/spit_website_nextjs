"use client";

import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./style.css";

import SubmitFeedbackTroGiang from "../../components/Submit/SubmitFeedbackTroGiang";
import SubmitFeedbackCLB from "../../components/Submit/SubmitFeedbackCLB";

const PhanHoiPage = () => {
  const [feedbackOption, setFeedbackOption] = useState("");
  const [feedbackCLB, setFeedbackCLB] = useState({
    noiDung: "",
  });

  const [feedbackTroGiang, setFeedbackTroGiang] = useState({
    monPhanHoi: "",
    nhomPhanHoi: "",
    noiDung: "",
  });

  const handleChangeOption = (event: SelectChangeEvent) => {
    setFeedbackOption(event.target.value);
  };

  const handleChangeFeedbackCLB = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFeedbackCLB({ ...feedbackCLB, noiDung: event.target.value });
  };

  const handleChangeFeedbackTroGiang = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFeedbackTroGiang({
      ...feedbackTroGiang,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeFeedbackTroGiangTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFeedbackTroGiang({ ...feedbackTroGiang, noiDung: event.target.value });
  };

  return (
    <>
      <div
        style={{
          minHeight: "660px",
          backgroundColor: "#05bada66",
          display: "flex",
          justifyContent: "center",
        }}
        className="mx-auto w-100"
      >
        <div style={{ maxWidth: "1000px", minWidth: "850px" }}>
          <div className="rp-header">
            <div>
              <h1
                style={{ marginTop: "50px", color: "#03045E" }}
                className="text-4xl font-bold text-uppercase"
              >
                Phản hồi
              </h1>
            </div>
          </div>
          <div className="rp-content mt-4">
            <FormControl required sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel id="feedback-option-label">
                Lựa chọn phản hồi
              </InputLabel>
              <Select
                labelId="feedback-option-label"
                id="feedback-option"
                value={feedbackOption}
                label="Lựa chọn phản hồi"
                onChange={handleChangeOption}
              >
                <MenuItem value={"Phản hồi CLB"}>Phản hồi CLB</MenuItem>
                <MenuItem value={"Phản hồi trợ giảng"}>
                  Phản hồi trợ giảng
                </MenuItem>
              </Select>
            </FormControl>
            {feedbackOption === "Phản hồi CLB" ? (
              <div>
                <TextareaAutosize
                  name="noiDung"
                  value={feedbackCLB.noiDung}
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Nhập nội dung phản hồi"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    marginBottom: "10px",
                  }}
                  onChange={handleChangeFeedbackCLB}
                />
                <SubmitFeedbackCLB noiDung={feedbackCLB.noiDung} />
              </div>
            ) : feedbackOption === "Phản hồi trợ giảng" ? (
              <div>
                <Box
                  component="form"
                  sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                  noValidate
                  autoComplete="off"
                  style={{ marginBottom: "10px" }}
                >
                  <TextField
                    name="monPhanHoi"
                    value={feedbackTroGiang.monPhanHoi}
                    label="Môn phản hồi"
                    variant="filled"
                    onChange={handleChangeFeedbackTroGiang}
                  />
                  <TextField
                    name="nhomPhanHoi"
                    value={feedbackTroGiang.nhomPhanHoi}
                    label="Nhóm phản hồi"
                    variant="filled"
                    onChange={handleChangeFeedbackTroGiang}
                  />
                  <TextareaAutosize
                    name="noiDung"
                    value={feedbackTroGiang.noiDung}
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Nhập nội dung phản hồi"
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      padding: "10px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "15px",
                    }}
                    onChange={handleChangeFeedbackTroGiangTextarea}
                  />
                </Box>
                <SubmitFeedbackTroGiang
                  monPhanHoi={feedbackTroGiang.monPhanHoi}
                  nhomPhanHoi={feedbackTroGiang.nhomPhanHoi}
                  noiDung={feedbackTroGiang.noiDung}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhanHoiPage;
