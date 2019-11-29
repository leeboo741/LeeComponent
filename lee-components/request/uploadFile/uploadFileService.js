
const RequestUtil = require("../requestUtil.js");
const {
  UploadFileParamObj
} = require("../uploadFile/uploadFileParamObj.js");

/**
 * 上传文件
 * @param urlStr
 * @param fileAddress
 * @param uploadCallback
 * @parma onProgressCallback
 * @return uploadTask
 */
function fileUpload(urlStr, fileAddress, uploadCallback, onProgressCallback) {
  let uploadTask = null;
  let fileUploadParam = new UploadFileParamObj({
    url: urlStr,
    filePath: fileAddress,
    name: "multipartFile",
    header: { "Content-Type": "multipart/form-data" },
    success(res) {
      console.log("upload success\n" + JSON.stringify(res));
      if (uploadCallback != null && typeof uploadCallback == "function") {
        uploadCallback(res);
      }
    },
    fail(res) {
      console.log("upload fail\n" + JSON.stringify(res));
    },
    complete(res) {
      uploadTask.offProgressUpdate(
        function offProgressCallback(res) {
          console.log("cancel progress: \n" + fileAddress);
        }
      );
    },
    onProgressCallback(res) {
      if (onProgressCallback != null && typeof onProgressCallback == "function") {
        onProgressCallback(res);
      }
    }
  })
  uploadTask = RequestUtil.RequestUploadFile(fileUploadParam);
  return uploadTask;
}

module.exports = {
  fileUpload: fileUpload
}