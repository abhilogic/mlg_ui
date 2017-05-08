

// dropzone


/* ------------------------------------------------------------------------------
*
*  # Dropzone multiple file uploader
*
*  Specific JS code additions for uploader_dropzone.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

    // Defaults
    Dropzone.autoDiscover = false;
    // Multiple files
    $("#dropzone_doc_multiple").dropzone({
        paramName: "file", // The name that will be used to transfer the file
        dictDefaultMessage: 'Drop files to upload <span>or CLICK</span>',
        maxFilesize: 2 // MB
    });

    $("#dropzone_img_multiple").dropzone({
        paramName: "file", // The name that will be used to transfer the file
        dictDefaultMessage: 'Drop files to upload <span>or CLICK</span>',
        maxFilesize: 2 // MB
    });
    $("#dropzone_video_multiple").dropzone({
        paramName: "file", // The name that will be used to transfer the file
        dictDefaultMessage: 'Drop files to upload <span>or CLICK</span>',
        maxFilesize: 2 // MB
    });

    // mlg-selectpicker
    $('.mlg-selectpicker').selectpicker();

});
