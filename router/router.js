const express = require('express')
const multer = require('multer')

let uploadFile = require('../services/uploadFile')
let listFile = require('../services/listFile')
let getFile = require('../services/getFile')

let router = express.Router()
let upload = multer({dest:__dirname+"/../../uploads"})

router.post("/upload",upload.single("pdffile"),uploadFile)
router.get("/files",listFile)
router.get("/file/:id",getFile)

module.exports =  router;