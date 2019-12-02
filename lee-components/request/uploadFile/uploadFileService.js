
const RequestUtil = require("../requestUtil.js");
const {
  UploadFileParamObj
} = require("../uploadFile/uploadFileParamObj.js");


/**
 *  文件上传
 * @param param
 * @return uploadTask
 */
function fileUpload(param) {
  let uploadTask = null;
  let fileUploadParam = new UploadFileParamObj({
    url: param.url,
    filePath: param.filePath,
    name: param.name,
    header: param.header,
    formData: param.formData,
    success(res) {
      console.log("upload success\n" + JSON.stringify(res));
      if (param.successCallback != null && typeof param.successCallback == "function") {
        param.successCallback(res);
      }
    },
    fail(res) {
      console.log("upload fail\n" + JSON.stringify(res));
      if (param.failCallback != null && typeof param.failCallback == "function") {
        param.failCallback(res);
      }
    },
    complete(res) {
      uploadTask.offProgressUpdate(
        function offProgressCallback(res) {
          console.log("cancel progress: \n" + fileAddress);
        }
      );
    },
    onProgressCallback(res) {
      if (param.onProgressCallback != null && typeof param.onProgressCallback == "function") {
        param.onProgressCallback(res);
      }
    }
  })
  uploadTask = RequestUtil.RequestUploadFile(fileUploadParam);
  return uploadTask;
}

/**
 * 上传文件
 * @param urlStr
 * @param fileAddress
 * @param uploadCallback
 * @parma onProgressCallback
 * @return uploadTask
 */
// function fileUpload(urlStr, fileAddress, uploadCallback, onProgressCallback) {
//   let uploadTask = null;
//   let fileUploadParam = new UploadFileParamObj({
//     url: urlStr,
//     filePath: fileAddress,
//     name: "multipartFile",
//     header: { "Content-Type": "multipart/form-data" },
//     success(res) {
//       console.log("upload success\n" + JSON.stringify(res));
//       if (uploadCallback != null && typeof uploadCallback == "function") {
//         uploadCallback(res);
//       }
//     },
//     fail(res) {
//       console.log("upload fail\n" + JSON.stringify(res));
//     },
//     complete(res) {
//       uploadTask.offProgressUpdate(
//         function offProgressCallback(res) {
//           console.log("cancel progress: \n" + fileAddress);
//         }
//       );
//     },
//     onProgressCallback(res) {
//       if (onProgressCallback != null && typeof onProgressCallback == "function") {
//         onProgressCallback(res);
//       }
//     }
//   })
//   uploadTask = RequestUtil.RequestUploadFile(fileUploadParam);
//   return uploadTask;
// }

module.exports = {
  fileUpload: fileUpload
}