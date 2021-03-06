//------------------------------------- Variables -------------------------------------//

var dbSel = "";
var jdbcOption = "";
var ip = "";
var port = "";
var acceptLocalhost = "";
var hibDb = "";
var hibUser = "";
var hibPsswd = "";
var jcrDb = "";
var jcrUser = "";
var jcrPsswd = "";
var qtzDb = "";
var qtzUser = "";
var qtzPsswd = "";
var isDebug = "";

console.log("-------------------------------------Main Start-------------------------------------")

function containerFluid(jQuery) {
    // Code to add class "container-fluir" when the document is ready.
    $(".container").addClass("container-fluid")
    $(".container-fluid").removeClass("container")
}

function modalStart(jQuery) {

    $("#caixa-confirmacao").dialog({
        resizable: false,
        height: 360,
        width: 360,
        modal: true,
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        }

    })
};

jQuery(
    function () {
        containerFluid();
    }

);

setTimeout(function () {
    modalStart();
}, 500);


$("#rdioDbSel").on("click", function () {


    dbSel = $("input:checked").val().trim();

    if (dbSel == "POSTGRESQL") {
        $(portText)[0].placeholder = 5432
    } else if (dbSel == "MYSQL") {
        $(portText)[0].placeholder = 3306
    } else if (dbSel == "ORACLE") {
        $(portText)[0].placeholder = 1521
    } else if (dbSel == "SQLSERVER") {
        $(portText)[0].placeholder = 1433
    }

});

//\\-------------------------------------Validation Session-------------------------------------//

//******************************Ip Validation******************************

$('#ipForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        ipText: {
            validators: {
                ip: {
                    message: 'Please enter a valid IP address'
                }
            }
        }
    }
});


//******************************Port Validation******************************

$('#portInput').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        portText: {
            validators: {
                regexp: {
                    regexp: /^\d{4,5}$/i,
                    message: 'Port must be within 4 and 5 digits.'
                }
            }
        }
    }
});

//******************************Hib DB Validation******************************

$('#hibDBnmForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        hibDBnm: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

$('#hibDBuserForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        hibDBuser: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

$('#hibDBpsswForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        hibDBpass: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

//******************************Jcr DB Validation******************************

$('#jcrDBnmForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        jcrDbInput: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

$('#jcrDBuserForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        jcrDBuser: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

$('#jcrDBpsswForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        jcrDBpass: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

//******************************Qtz DB Validation******************************

$('#qtzDBnmForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        qtzDBnm: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

$('#qtzDBuserForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        qtzDBuser: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});

$('#qtzDBpsswForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        qtzDBpass: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9_\-\@\#\$\%\&\*\(\)\|\\\+\!]+$/i,
                    message: 'Must be an alfanumeric String'
                }
            }
        }
    }
});
//\\-------------------------------------END OF VALIDATION SESSION-------------------------------------//



//\\-------------------------------------Request Session-------------------------------------//

$("#exchangeBttn").on('click', function () {

    var exchange = true;

    if ($(".has-error").length > 0) {
        var exchange = false;
    };

    if (dbSel == "") {

        dbSel = $("input:checked").val().trim();
    }

    isDebug = $("#debugCheck")[0].checked

    if (isDebug) {
        isDebug = "YES";
    } else if (!isDebug) {
        isDebug = "NO";
    };

    console.log("Changing your repository...");

    //--------------------------- GET Ip input ---------------------------\\

    jdbcOption = $("#jdbcCheck-0")[0].checked

    if (jdbcOption == true) {
        jdbcOption = "YES"
    } else if (jdbcOption == false) {
        jdbcOption = "NO"
    };

    //--------------------------- GET Ip input ---------------------------\\
    ip = $("#ipText")[0].value

    if (ip == "") {
        ip = $("#ipText")[0].placeholder
        console.log("Using localhost as DB ip")
    };

    //-------------------------- GET Port input --------------------------\\
    port = $("#portText")[0].value

    if (port == "") {
        console.log("Using default Port")
        port = $("#portText")[0].placeholder
    };

    //----------------------- GET hibernate inputs -----------------------\\
    hibDb = $("#hibDBnm")[0].value;
    hibUser = $("#hibDBuser")[0].value;
    hibPsswd = $("#hibDBpass")[0].value;

    //----------------------- GET Jackrabbit inputs -----------------------\\
    jcrDb = $("#jcrDbInput")[0].value;
    jcrUser = $("#jcrDBuser")[0].value;
    jcrPsswd = $("#jcrDBpass")[0].value;

    //------------------------- GET Quartz inputs -------------------------\\
    qtzDb = $("#qtzDBnm")[0].value;
    qtzUser = $("#qtzDBuser")[0].value;
    qtzPsswd = $("#qtzDBpass")[0].value;


    if (exchange == true) {
        //------------------------- SET PARAMS to ETL -------------------------\\

        var objParam = {
            paramparamSGBD: dbSel,
            paramparamCOPY_DRIVERS: jdbcOption,
            paramparamPORT: port,
            paramparamDB_IP_NAME: ip,
            paramparamHIB_DBNAME: hibDb,
            paramparamHIB_USER: hibUser,
            paramparamHIB_PASS: hibPsswd,
            paramparamJCR_DBNAME: jcrDb,
            paramparamJCR_USER: jcrUser,
            paramparamJCR_PASS: jcrPsswd,
            paramparamQTZ_DBNAME: qtzDb,
            paramparamQTZ_USER: qtzUser,
            paramparamQTZ_PASS: qtzPsswd,
            paramparamDEBUG: isDebug
        }

        console.log(objParam)

        $.post("/pentaho/plugin/repoEX/api/repoexjob", objParam)
            .done(function (data) {
                if (isDebug == "YES") {
                    var acceptDebug = confirm("Pentaho successfully migrated on debug mode, please check the files.")
                } else {
                    var acceptEx = confirm("Pentaho successfully migrated! \n Please shutdown your server, remove \\temp\\ and \\work\\ folders\n and start your server;");
                };
            });

    } else {
        var confirmElse = confirm("Some fields are wrong. \n Please, check the informations again.")
    };

});