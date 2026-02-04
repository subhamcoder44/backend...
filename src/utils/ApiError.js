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
   if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
}
}
export {ApiError}