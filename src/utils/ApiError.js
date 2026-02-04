class ApiError extends Error {
constructor(
statuscode,
message,
Error,

){
this.statuscode=statuscode
this.message=message,
this.Error=Error
success:false
}
}
export {ApiError}