var map, heatmap;
let markers = [];
var pdfFileBase64 = "";

var divResult = "";

function initMap() {
    var heatMapData = [
        { location: new google.maps.LatLng(4.719109, -74.031375), weight: 1 },
        { location: new google.maps.LatLng(4.7534889, -74.0378885), weight: 51 },
        { location: new google.maps.LatLng(4.7371475, -74.0308108), weight: 56 },
        { location: new google.maps.LatLng(4.7453291, -74.0394951), weight: 78 },
        { location: new google.maps.LatLng(4.7255574, -74.0322549), weight: 130 },
        { location: new google.maps.LatLng(4.664612, -74.0571459), weight: 49 },
        { location: new google.maps.LatLng(4.7101896, -74.0424098), weight: 30 },
        { location: new google.maps.LatLng(4.7032732, -74.028596), weight: 130 },
        { location: new google.maps.LatLng(4.7666942, -74.0313184), weight: 50 },
        { location: new google.maps.LatLng(4.6693361, -74.0410591), weight: 37 },
        { location: new google.maps.LatLng(4.652518, -74.058304), weight: 2 },
        { location: new google.maps.LatLng(4.6355156, -74.0634685), weight: 57 },
        { location: new google.maps.LatLng(4.665937, -74.0589797), weight: 320 },
        { location: new google.maps.LatLng(4.649656, -74.063097), weight: 258 },
        { location: new google.maps.LatLng(4.6171774, -74.0702045), weight: 85 },
        { location: new google.maps.LatLng(4.6129625, -74.064951), weight: 31 },
        { location: new google.maps.LatLng(4.6112718, -74.0658856), weight: 293 },
        { location: new google.maps.LatLng(4.5800968, -74.0756201), weight: 63 },
        { location: new google.maps.LatLng(4.5902367, -74.0711044), weight: 27 },
        { location: new google.maps.LatLng(4.5695279, -74.0859339), weight: 50 },
        { location: new google.maps.LatLng(4.5783071, -74.0891635), weight: 83 },
        { location: new google.maps.LatLng(4.5663745, -74.1005042), weight: 134 },
        { location: new google.maps.LatLng(4.5489546, -74.0899378), weight: 66 },
        { location: new google.maps.LatLng(4.5420563, -74.0861506), weight: 22 },
        { location: new google.maps.LatLng(4.5203802, -74.0890896), weight: 2 },
        { location: new google.maps.LatLng(4.5383266, -74.1131347), weight: 40 },
        { location: new google.maps.LatLng(4.5095279, -74.1054048), weight: 99 },
        { location: new google.maps.LatLng(4.5056902, -74.1042), weight: 46 },
        { location: new google.maps.LatLng(4.5056683, -74.0984361), weight: 28 },
        { location: new google.maps.LatLng(4.5211166, -74.0950491), weight: 1 },
        { location: new google.maps.LatLng(4.546443, -74.0560129), weight: 14 },
        { location: new google.maps.LatLng(4.595655, -74.1341231), weight: 200 },
        { location: new google.maps.LatLng(4.5959911, -74.119795), weight: 66 },
        { location: new google.maps.LatLng(4.5972667, -74.171624), weight: 32 },
        { location: new google.maps.LatLng(4.6085126, -74.1769892), weight: 73 },
        { location: new google.maps.LatLng(4.60992, -74.18473), weight: 156 },
        { location: new google.maps.LatLng(4.6431556, -74.1884382), weight: 106 },
        { location: new google.maps.LatLng(4.6323476, -74.185276), weight: 17 },
        { location: new google.maps.LatLng(4.6421586, -74.13023), weight: 41 },
        { location: new google.maps.LatLng(4.6404736, -74.078642), weight: 170 },
        { location: new google.maps.LatLng(4.6186916, -74.1354065), weight: 107 },
        { location: new google.maps.LatLng(4.6439852, -74.1357262), weight: 128 },
        { location: new google.maps.LatLng(4.6217296, -74.1481593), weight: 170 },
        { location: new google.maps.LatLng(4.6171506, -74.152504), weight: 106 },
        { location: new google.maps.LatLng(4.6531372, -74.1616439), weight: 11 },
        { location: new google.maps.LatLng(4.6473068, -74.1635706), weight: 56 },
        { location: new google.maps.LatLng(4.6306047, -74.1599617), weight: 148 },
        { location: new google.maps.LatLng(4.6203163, -74.1770971), weight: 74 },
        { location: new google.maps.LatLng(4.6424068, -74.1597204), weight: 177 },
        { location: new google.maps.LatLng(4.6383548, -74.1707244), weight: 50 },
        { location: new google.maps.LatLng(4.6586284, -74.1095285), weight: 55 },
        { location: new google.maps.LatLng(4.6459769, -74.1128811), weight: 83 },
        { location: new google.maps.LatLng(4.6743153, -74.11394109), weight: 64 },
        { location: new google.maps.LatLng(4.6632358, -74.1166642), weight: 49 },
        { location: new google.maps.LatLng(4.7014128, -74.1444969), weight: 18 },
        { location: new google.maps.LatLng(4.7175369, -74.1031249), weight: 168 },
        { location: new google.maps.LatLng(4.6865667, -74.1542518), weight: 22 },
        { location: new google.maps.LatLng(4.67181, -74.155227), weight: 67 },
        { location: new google.maps.LatLng(4.6682581, -74.1000085), weight: 11 },
        { location: new google.maps.LatLng(4.7014432, -74.114508), weight: 38 },
        { location: new google.maps.LatLng(4.6903416, -74.0801836), weight: 93 },
        { location: new google.maps.LatLng(4.6998742, -74.0895903), weight: 82 },
        { location: new google.maps.LatLng(4.6879363, -74.09732), weight: 92 },
        { location: new google.maps.LatLng(4.6813554, -74.1040428), weight: 47 },
        { location: new google.maps.LatLng(4.7181301, -74.1140818), weight: 42 },
        { location: new google.maps.LatLng(4.7166877, -74.115271), weight: 54 },
        { location: new google.maps.LatLng(4.740226, -74.076881), weight: 36 },
        { location: new google.maps.LatLng(4.7142661, -74.0722394), weight: 11 },
        { location: new google.maps.LatLng(4.7722001, -74.0557154), weight: 43 },
        { location: new google.maps.LatLng(4.7539405, -74.055356), weight: 49 },
        { location: new google.maps.LatLng(4.755021, -74.049298), weight: 89 },
        { location: new google.maps.LatLng(4.740978, -74.096272), weight: 6 },
        { location: new google.maps.LatLng(4.7009368, -74.0554073), weight: 66 },
        { location: new google.maps.LatLng(4.7565431, -74.0678602), weight: 23 },
        { location: new google.maps.LatLng(4.7110392, -74.0706086), weight: 72 },
        { location: new google.maps.LatLng(4.6955899, -74.0716872), weight: 30 },
        { location: new google.maps.LatLng(4.7170226, -74.0733486), weight: 135 },
        { location: new google.maps.LatLng(4.7290939, -74.092795), weight: 250 },
        { location: new google.maps.LatLng(4.7404826, -74.0993608), weight: 120 },
        { location: new google.maps.LatLng(4.663569, -74.087116), weight: 18 },
        { location: new google.maps.LatLng(4.6895163, -74.0671358), weight: 76 },
        { location: new google.maps.LatLng(4.6691052, -74.0744671), weight: 90 },
        { location: new google.maps.LatLng(4.665198, -74.0671545), weight: 185 },
        { location: new google.maps.LatLng(4.6459237, -74.071329), weight: 141 },
        { location: new google.maps.LatLng(4.666132, -74.064605), weight: 192 },
        { location: new google.maps.LatLng(4.6586709, -74.0939604), weight: 55 },
        { location: new google.maps.LatLng(4.6520573, -74.0861774), weight: 37 },
        { location: new google.maps.LatLng(4.6399154, -74.0889174), weight: 60 },
        { location: new google.maps.LatLng(4.6531999, -74.0952813), weight: 42 },
        { location: new google.maps.LatLng(4.610614, -74.0843757), weight: 278 },
        { location: new google.maps.LatLng(4.6034988, -74.0977614), weight: 58 },
        { location: new google.maps.LatLng(4.5832989, -74.1000404), weight: 44 },
        { location: new google.maps.LatLng(4.5947191, -74.0957181), weight: 200 },
        { location: new google.maps.LatLng(4.6210604, -74.0952281), weight: 56 },
        { location: new google.maps.LatLng(4.645219, -74.0828719), weight: 33 },
        { location: new google.maps.LatLng(4.6037002, -74.1071036), weight: 72 },
        { location: new google.maps.LatLng(4.5991107, -74.1291017), weight: 60 },
        { location: new google.maps.LatLng(4.6272101, -74.1106959), weight: 81 },
        { location: new google.maps.LatLng(4.5991293, -74.0672921), weight: 87 },
        { location: new google.maps.LatLng(4.5813155, -74.0998585), weight: 133 },
        { location: new google.maps.LatLng(4.5843365, -74.1068595), weight: 183 },
        { location: new google.maps.LatLng(4.5698, -74.1191429), weight: 78 },
        { location: new google.maps.LatLng(4.5545314, -74.1168799), weight: 67 },
        { location: new google.maps.LatLng(4.5509315, -74.1068775), weight: 52 },
        { location: new google.maps.LatLng(4.5211166, -74.0950491), weight: 1 },
        { location: new google.maps.LatLng(4.6293625, -74.1198411), weight: 5 },
        { location: new google.maps.LatLng(4.5413618, -74.1346501), weight: 3 },
        { location: new google.maps.LatLng(4.5062818, -74.1172996), weight: 1 },
        { location: new google.maps.LatLng(4.5743778, -74.1532775), weight: 42 },
        { location: new google.maps.LatLng(4.5698383, -74.1411182), weight: 60 },
        { location: new google.maps.LatLng(4.5537987, -74.1399617), weight: 70 },
        { location: new google.maps.LatLng(4.5375942, -74.1440506), weight: 15 },
        { location: new google.maps.LatLng(4.5884931, -74.1657189), weight: 57 },
        { location: new google.maps.LatLng(4.578195, -74.1550702), weight: 46 },
    ];
    var bogota = new google.maps.LatLng(4.55, -74.11);
    map = new google.maps.Map(document.getElementById('map'), {
        center: bogota,
        zoom: 13,
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
    });
    heatmap.setMap(map);
    heatmap.set('radius', heatmap.get('radius') ? null : 60);
}

function RefreshMap() {
    $('#menu1').css({ height: $(window).height() - 265 + 'px' });
    $('#filters').hide();
    setTimeout(function() {
        zoom = map.getZoom();
        center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setZoom(zoom);
        map.setCenter(center);

        google.maps.event.trigger(map, 'resize');
    }, 200);
}

function ToggleFilters() {
    $('#filters').toggle();
}



function PrintInfo(url) {
    $.getJSON(url, function(data, textstatus) {
        var cards = '';

        $.each(data, function(i, entry) {

            if (entry.idiomas === undefined) { entry.idiomas = 'No aplica' }
            if (entry.estrato_socio_economico === undefined) { entry.estrato_socio_economico = 'No aplica' }
            if (entry.especialidad_para_la_media === undefined) { entry.especialidad_para_la_media = 'No aplica' }
            if (entry.modelos_educativos === undefined) { entry.modelos_educativos = 'No aplica' }
            if (entry.discapacidades === undefined) { entry.discapacidad_por_categoria = 'No aplica' }
            if (entry.modelos_educativos === undefined) { entry.modelos_educativos = 'No aplica' }
            if (entry.talentos_o_capacidades_excepcionales === undefined) { entry.talentos_o_capacidades_excepcionales = 'No aplica' }


            cards =
                cards +
                `<div class="card mb-3" id="InfoAllOnlyu" >
                                    
                    <div class="card-body">                               
                        <h6 class="card-title mb-1">
                            <a href="#">${entry.nombre_establecimiento_educativo}</a>
                        </h6>
                        <p class="card-text small">${entry.direccion1_georeferenciacion}                                
                        </p>

                        <p class="card-text small">
                            Localidad: 
                            ${entry.nombre_localidad}                                
                        </p>

                        <p class="card-text small">
                            Barrio: 
                            ${entry.barrio1_geo}                                
                        </p>

                        <p class="card-text small">
                          Discapacidades: 
                            ${entry.discapacidad_por_categoria}                                
                        </p>

                        <p class="card-text small">
                            Talento excepcionales: 
                            ${entry.talentos_o_capacidades_excepcionales}                                
                        </p>
                        <p class="card-text small">
                            Clase: 
                            ${entry.clase}                                
                        </p>

                        
                        
                        <p class="card-text small">
                            Grados: 
                            ${entry.grados}                                
                        </p>
                        <p class="card-text small">
                            Especialidad: 
                            ${entry.especialidad_para_la_media}                                
                        </p>
                        
                        <p class="card-text small">
                            Modelos Educativos: 
                            ${entry.modelos_educativos}                                
                        </p>
                        <p class="card-text small">
                            Idiomas: 
                            ${entry.idiomas}                                
                        </p>
                        <p class="card-text small">
                            Modelos Estrato socioeconómico : 
                            ${entry.estrato_socio_economico}                                
                        </p>


                    </div>
                    <hr class="my-0">
                    <div class="card-body py-2 small">
                        
                        
                        <a class="mr-3 d-inline-block" href="javascript:void(0)" onclick="ChangeTabCompartationMAP('${entry.direccion1_georeferenciacion}', '${entry.nombre_establecimiento_educativo}')">
                            <i class="fa fa-fw fa-map"></i>
                            Mapa
                        </a>                       

                        
                    </div>
                    <div class="card-footer small text-muted">
                        Ultima actualización hace 8 meses
                    </div>
                </div>`;
        });

        $('#ComparerDiv').append(cards);
        divResult = divResult + cards;


    });
}

function CheckFunction() {
    var index = 0;
    $('input[type=checkbox]:checked').each(function() {
        if ($('input[type=checkbox]:checked').length >= 3) {
            focusResultMenu();
            clearMarkers();
            var idColegio = $('input[type=checkbox]:checked')[index].id;
            var url = createAPIUrl(idColegio);
            PrintInfo(url);
            index++;
            // generatePDF('barco');
        }

        // sendMail();
    });
}

function focusResultMenu() {
    $('#ResultMenu').removeClass('active');
    $('#FilterMenu').removeClass('active');
    $('#MapMenu').removeClass('active');
    $('#CompareMenu').addClass('active');

    $('#MapContent').hide();
    $('#Results').hide();
    $('#Filters').hide();

    $('#ComparerDiv').show();
}

function createAPIUrl(idColegio) {
    var query = 'nombreestablecimiento=' + idColegio;

    url =
        'https://www.datos.gov.co/resource/xax6-k7eu.json?' +
        query +
        '&$$app_token=K48oToivS8HmR2UDvdG3yrmeJ';

    return url;
}

function sendMail() {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            key: 'YOUR API KEY HERE',
            message: {
                from_email: 'YOUR@EMAIL.HERE',
                to: [{
                    email: 'almenfis_1717@EMAIL.HERE',
                    name: 'RECIPIENT NAME (OPTIONAL)',
                    type: 'to',
                }, ],
                autotext: 'true',
                subject: 'YOUR SUBJECT HERE!',
                html: 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!',
            },
        },
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });
}

function Search() {
    clearMarkers()

    readDadta();
    $('#Filters').hide();
    document.getElementById('loader').style.display = 'block';

    zona = document.getElementById('Zone').value;
    talentos = document.getElementById('Talents').value;
    clase = document.getElementById('Class').value;
    //grado = document.getElementById('grade').value;
    especialidad = document.getElementById('Specialties').value;
    //modelos_educativos = document.getElementById('EducationalModel').value;
    discapacidades = document.getElementById('discapacity').value;

    var isFalseZona = zona == 'false';
    var isFalseTalentos = talentos == 'false';
    var isFalseclase = clase == 'false';
    //var isFalseGrado = grado == 'false';
    var isFalseEspecialidad = especialidad == 'false';
    //var isFalseModelos_educativos = modelos_educativos == 'false';
    var isFalseDiscapacity = discapacidades == 'false';
    var isFirtsQuery = false;

    query = "$query=SELECT * where ";

    if (!isFalseDiscapacity) {
        discapacidades = " discapacidad_por_categoria like '%25" + discapacidades + "%25'";
        isFirtsQuery = true;
    } else {
        discapacidades = '';
    }

    if (!isFalseTalentos) {

        if (isFirtsQuery == true) {
            talentos = " and talentos_o_capacidades_excepcionales like '%25" + talentos + "%25'";
        } else {
            talentos = " talentos_o_capacidades_excepcionales like '%25" + talentos + "%25'";
            isFirtsQuery = true;

        }
    } else {
        talentos = '';
    }



    if (!isFalseZona) {

        if (isFirtsQuery == true) {
            zona = " and nombre_localidad like '%25" + zona + "%25'";
        } else {
            zona = " nombre_localidad like '%25" + zona + "%25'";
            isFirtsQuery = true;

        }
    } else {
        zona = '';
    }

    if (!isFalseclase) {
        if (isFirtsQuery == true) {
            clase = " and clase like '%25" + clase + "%25'";
        } else {
            clase = " clase like '%25" + clase + "%25'";
            isFirtsQuery = true;

        }
    } else {
        clase = '';
    }

    //if (!isFalseGrado) {
    // grado = " and grados  like '%25" + grado + "%25'";
    //} else {
    // grado = '';
    //}

    if (!isFalseEspecialidad) {


        if (isFirtsQuery == true) {
            especialidad = " and especialidad_para_la_media like '%25" + especialidad + "%25'";
        } else {
            especialidad = " especialidad_para_la_media like '%25" + especialidad + "%25'";
            isFirtsQuery = true;

        }
    } else {
        especialidad = '';
    }





    // if (!isFalseModelos_educativos) {
    // modelos_educativos =
    //   " and modelos_educativos like '%25" + modelos_educativos + "%25'";
    //} else {
    //  modelos_educativos = '';
    //}

    url =
        'https://www.datos.gov.co/resource/jebf-6unk.json?' + query +

        discapacidades +
        talentos +
        zona +
        clase +
        especialidad +
        '&$$app_token=K48oToivS8HmR2UDvdG3yrmeJ';;


    $.getJSON(url, function(data, textstatus) {
        if (data.length == 0) {
            $('#NotFound')
                .html(`<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <div class="alert alert-danger" role="alert">
                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span class="sr-only">Información de busqueda:</span>
                            Sin resultados, intente con filtros diferentes
                            </div>
                         </div>`);
            $('#ResultSearch').html('');
        } else {
            var notfound = `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <div class="alert alert-info" role="alert">
                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span class="sr-only">Información de busqueda:</span>
                            Se encontraron ${data.length} registros -->
                            Puedes seleccionar tres colegios para realizar la comparación
                            </div>
                         </div>`;

            $('#NotFound').html(notfound);

            var cards = '';

            $.each(data, function(i, entry) {
                if (entry.idiomas === undefined) { entry.idiomas = 'No aplica' }
                if (entry.estrato_socio_economico === undefined) { entry.estrato_socio_economico = 'No aplica' }
                if (entry.especialidad_para_la_media === undefined) { entry.especialidad_para_la_media = 'No aplica' }
                if (entry.modelos_educativos === undefined) { entry.modelos_educativos = 'No aplica' }
                if (entry.discapacidad_por_categoria === undefined) { entry.discapacidad_por_categoria = 'No aplica' }
                if (entry.modelos_educativos === undefined) { entry.modelos_educativos = 'No aplica' }
                if (entry.clase === undefined) { entry.clase = 'No aplica' }


                if (entry.talentos_o_capacidades_excepcionales === undefined) { entry.talentos_o_capacidades_excepcionales = 'No aplica' }


                cards =
                    cards +
                    `<div class="card mb-3" id="InfoAll">
                            
                            <div class="card-body">
                              
                                <h6 class="" >
                                   
                                    <input type="checkbox" onclick="CheckFunction()" class="form-check-input" id="${entry.nombre_establecimiento_educativo}">
                                    <label class="custom-control-label" for="defaultUnchecked"> Elegir este colegio para comparar</label>
                               </h6>

                                <h6 class="card-title mb-1">
                                    <a href="#">${entry.nombre_establecimiento_educativo}</a>
                                </h6>
                                <p class="card-text small">${entry.direccion1_georeferenciacion}                                
                                </p>
                                <p class="card-text small">
                                Localidad : 
                                ${entry.nombre_localidad}, barrio  ${entry.barrio1_geo}                                  
                               </p>

                               <p class="card-text small">
                                    Clase: 
                                    ${entry.clase}                                
                                </p>
                               

                                <p class="card-text small">
                                    Discapacidades: 
                                    ${entry.discapacidad_por_categoria}                                
                                </p>

                                <p class="card-text small">
                                    Talentos excepcionales: 
                                    ${entry.talentos_o_capacidades_excepcionales}                                
                                </p>
                                
                              
                                
                                <p class="card-text small">
                                    Especialidad: 
                                    ${entry.especialidad_para_la_media}                                
                                </p>
                                <p class="card-text small">
                                    Modelos Educativos: 
                                    ${entry.modelos_educativos}                                
                                </p>


                            </div>
                            <hr class="my-0">
                            <div class="card-body py-2 small">
                                
                                <a class="mr-3 d-inline-block" href="javascript:void(0)" onclick="ChangeTab('${entry.direccion1_georeferenciacion}', '${entry.nombre_establecimiento_educativo}')">
                                    <i class="fa fa-fw fa-map"></i>
                                    Mapa
                                </a>
                               
                            </div>
                            <div class="card-footer small text-muted">
                                Ultima actualización hace 2 meses
                            </div>
                        </div>`;
            });
            $('#ResultSearch').html(cards);
        }

        $('#Results').show();
        $('#ResultMenu').addClass('active');
        $('#FilterMenu').removeClass('active');
        $('#MapMenu').removeClass('active');

        document.getElementById('loader').style.display = 'none';
    });
}

function readDadta() {
    $.getJSON(".response.json", function(datos) {


        $.each(data, function(i, entry) {

            alert("Numero primo: " + entry.nombre_establecimiento_educativo);
        });
    });
}

function ChangeTab(address, schoolName) {
    showMap();
    console.log(address);
    SetDireccion(address, schoolName);

}

function ChangeTabCompartationMAP(address, schoolName) {
    showMap();
    console.log(address);
    SetDireccion(address, schoolName);
    SetDireccionUser();

}

function showFilter() {
    $('#Filters').show();
    $('#Results').hide();
    $('#MapContent').hide();

    $('#FilterMenu').addClass('active');
    $('#ResultMenu').removeClass('active');
    $('#MapMenu').removeClass('active');
}

function showResults() {
    $('#Results').show();
    $('#Filters').hide();
    $('#MapContent').hide();

    $('#ResultMenu').addClass('active');
    $('#FilterMenu').removeClass('active');
    $('#MapMenu').removeClass('active');

}

function SetDireccion(address, schoolName) {

    var request = {
        query: address,
        fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        console.log(results);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                createMarker(results[i], schoolName);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}

function SetDireccionUser() {

    address = document.getElementById('addressUser').value;
    var request = {
        query: address,
        fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        console.log(results);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}

function generatePDF(fileName) {


    $('#content').append(divResult);


    var doc = new jsPDF();
    doc.fromHTML($('body').get(0), 15, 15, {
        'width': 170
    });
    console.log(doc);
    var opt = demoFromHTML();

    //var ipmt = convertToBase64();


    //var ooo = Base64.encode(opt);

    var opm = 'JVBERi0xLjMKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL1Jlc291cmNlcyAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIuMDAgNzkyLjAwXQovQ29udGVudHMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwvTGVuZ3RoIDk5ND4+CnN0cmVhbQowLjIwIHcKMCBHCnEKcSBCVCAwIGcgNDAuMDAgNzAwLjc1IFRkCjAgLTE4LjAwIFRkCjAuMTI5IDAuMTQ1IDAuMTYxIHJnCi9GMSAxMi4wMCBUZiAoU2VsZWN0ICJMb2dvdXQiIGJlbG93IGlmIHlvdSBhcmUgcmVhZHkgdG8gZW5kIHlvdXIgY3VycmVudCBzZXNzaW9uLikgVGoKRVQgUQpxIEJUIDAgZyA0MC4wMCA2NzEuNTAgVGQKMCAtMTMuMjAgVGQKMC4wMDAgMC40ODIgMS4wMDAgcmcKL0YyIDEyLjAwIFRmIChJTlNUIERFIEJUTyBURUMgQ09NRVJDSUFMIFBJVEFHT1JBUykgVGoKRVQgUQpxIEJUIDAgZyA0MC4wMCA2NTUuMzAgVGQKMCAtMTQuNDAgVGQKMC4xMjkgMC4xNDUgMC4xNjEgcmcKL0YxIDkuNjAgVGYgKEtSIDUgMTEgNjcpIFRqCkVUIFEKcSBCVCAwIGcgNDAuMDAgNjI4LjkwIFRkCjAgLTE0LjQwIFRkCi9GMSA5LjYwIFRmIChab25hOiBVUkJBTkEpIFRqCkVUIFEKcSBCVCAwIGcgNDAuMDAgNjAyLjUwIFRkCjAgLTE0LjQwIFRkCi9GMSA5LjYwIFRmIChKb3JuYWRhOiBDT01QTEVUQSkgVGoKRVQgUQpxIEJUIDAgZyA0MC4wMCA1NzYuMTAgVGQKMCAtMTQuNDAgVGQKL0YxIDkuNjAgVGYgKEdyYWRvczogNiw3LDgsOSwxMCwxMSkgVGoKRVQgUQpxIEJUIDAgZyA0MC4wMCA1NDkuNzAgVGQKMCAtMTQuNDAgVGQKL0YxIDkuNjAgVGYgKEVzcGVjaWFsaWRhZDogQ09NRVJDSUFMLEFDQUTJTUlDQSkgVGoKRVQgUQpxIEJUIDAgZyA0MC4wMCA1MjMuMzAgVGQKMCAtMTQuNDAgVGQKL0YxIDkuNjAgVGYgKE1vZGVsb3MgRWR1Y2F0aXZvczogRURVQ0FDSdNOIFRSQURJQ0lPTkFMKSBUagpFVCBRCnEgQlQgMCBnIDQwLjAwIDUwOC45MCBUZAowIC0xNC40MCBUZAowLjAwMCAwLjQ4MiAxLjAwMCByZwovRjEgOS42MCBUZiAoTWFwYSkgVGoKRVQgUQpxIEJUIDAgZyA0MC4wMCA0ODUuNTAgVGQKMCAtMTQuNDAgVGQKMC41MjUgMC41NTcgMC41ODggcmcKL0YxIDkuNjAgVGYgKFVsdGltYSBhY3R1YWxpemFjafNuIGhhY2UgOCBtZXNlcykgVGoKRVQgUQpRCmVuZHN0cmVhbQplbmRvYmoKMSAwIG9iago8PC9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFIgXQovQ291bnQgMQo+PgplbmRvYmoKNSAwIG9iago8PC9CYXNlRm9udC9IZWx2ZXRpY2EvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKNiAwIG9iago8PC9CYXNlRm9udC9IZWx2ZXRpY2EtQm9sZC9UeXBlL0ZvbnQKL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iago3IDAgb2JqCjw8L0Jhc2VGb250L0hlbHZldGljYS1PYmxpcXVlL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjggMCBvYmoKPDwvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGRPYmxpcXVlL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjkgMCBvYmoKPDwvQmFzZUZvbnQvQ291cmllci9UeXBlL0ZvbnQKL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iagoxMCAwIG9iago8PC9CYXNlRm9udC9Db3VyaWVyLUJvbGQvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTEgMCBvYmoKPDwvQmFzZUZvbnQvQ291cmllci1PYmxpcXVlL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjEyIDAgb2JqCjw8L0Jhc2VGb250L0NvdXJpZXItQm9sZE9ibGlxdWUvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTMgMCBvYmoKPDwvQmFzZUZvbnQvVGltZXMtUm9tYW4vVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTQgMCBvYmoKPDwvQmFzZUZvbnQvVGltZXMtQm9sZC9UeXBlL0ZvbnQKL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iagoxNSAwIG9iago8PC9CYXNlRm9udC9UaW1lcy1JdGFsaWMvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTYgMCBvYmoKPDwvQmFzZUZvbnQvVGltZXMtQm9sZEl0YWxpYy9UeXBlL0ZvbnQKL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iagoxNyAwIG9iago8PC9CYXNlRm9udC9aYXBmRGluZ2JhdHMvVHlwZS9Gb250Ci9FbmNvZGluZy9TdGFuZGFyZEVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9Gb250IDw8Ci9GMSA1IDAgUgovRjIgNiAwIFIKL0YzIDcgMCBSCi9GNCA4IDAgUgovRjUgOSAwIFIKL0Y2IDEwIDAgUgovRjcgMTEgMCBSCi9GOCAxMiAwIFIKL0Y5IDEzIDAgUgovRjEwIDE0IDAgUgovRjExIDE1IDAgUgovRjEyIDE2IDAgUgovRjEzIDE3IDAgUgo+PgovWE9iamVjdCA8PAo+Pgo+PgplbmRvYmoKMTggMCBvYmoKPDwKL1Byb2R1Y2VyIChqc1BERiAxLjMuMiAyMDE2LTA5LTMwVDIwOjMzOjE4Ljg2N1o6amFtZXNoYWxsKQovQ3JlYXRpb25EYXRlIChEOjIwMjAwOTIyMjEyMDQ1LTA1JzAwJykKPj4KZW5kb2JqCjE5IDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAxIDAgUgovT3BlbkFjdGlvbiBbMyAwIFIgL0ZpdEggbnVsbF0KL1BhZ2VMYXlvdXQgL09uZUNvbHVtbgo+PgplbmRvYmoKeHJlZgowIDIwCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMTE2MSAwMDAwMCBuIAowMDAwMDAyNDU1IDAwMDAwIG4gCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDExOCAwMDAwMCBuIAowMDAwMDAxMjE4IDAwMDAwIG4gCjAwMDAwMDEzMDggMDAwMDAgbiAKMDAwMDAwMTQwMyAwMDAwMCBuIAowMDAwMDAxNTAxIDAwMDAwIG4gCjAwMDAwMDE2MDMgMDAwMDAgbiAKMDAwMDAwMTY5MSAwMDAwMCBuIAowMDAwMDAxNzg1IDAwMDAwIG4gCjAwMDAwMDE4ODIgMDAwMDAgbiAKMDAwMDAwMTk4MyAwMDAwMCBuIAowMDAwMDAyMDc2IDAwMDAwIG4gCjAwMDAwMDIxNjggMDAwMDAgbiAKMDAwMDAwMjI2MiAwMDAwMCBuIAowMDAwMDAyMzYwIDAwMDAwIG4gCjAwMDAwMDI2OTEgMDAwMDAgbiAKMDAwMDAwMjgxMiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDIwCi9Sb290IDE5IDAgUgovSW5mbyAxOCAwIFIKPj4Kc3RhcnR4cmVmCjI5MTYKJSVFT0Y=';
    var rril0 = pdfFileBase64;
    enviar(rril0, 'ColegiosBogota1.pdf');





}










function convertToBase64() {
    //Read File
    var selectedFile = document.getElementById("inputFile").files;
    namePdf = selectedFile[0];
    //getBase64(selectedFile[0]);
    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        var base64;
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            // Print data in console
            alert('oscar' + base64);
            pdfFileBase64 = base64;
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);


    }
}






function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#content')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function(dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('ColegiosBogota.pdf');
        }, margins
    );
    $('#content').hide();
    return pdf;


    var pdfs = new jsPDF('p', 'pt', 'letter');
    pdfs.canvas.height = 72 * 11;
    pdfs.canvas.width = 72 * 8.5;

    pdfs.fromHTML(document.body);

    pdfs.save('test.pdf');

}




function enviar(pdf, nombre) {





    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "colegiosbogota2020@gmail.com",
        Password: "AB9CD84CF2FF50D99DDD05B8520796F0C983",
        To: 'odromero1717@gmail.com',
        From: "colegiosbogota2020@gmail.com",
        Subject: "Vinajas  Chupador de Pijas",
        Body: "Este es un  test",
        Attachments: [{
            name: nombre,
            data: pdf,
        }]
    }).then(
        message => alert(message)
    );


}









function createMarker(places, name) {
    var markerPlace = new google.maps.Marker({
        map: map,
        title: places.name,
        label: name,
        position: places.geometry.location,
    });
    markers.push(markerPlace)
}

function clearMarkers() {
    setMapOnAll(null);
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function showMap() {
    $('#MapContent').show();
    $('#Results').hide();
    $('#Filters').hide();

    $('#MapMenu').addClass('active');
    $('#ResultMenu').removeClass('active');
    $('#FilterMenu').removeClass('active');

    setTimeout(function() {
        zoom = map.getZoom();
        center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setZoom(zoom);
        map.setCenter(center);

        google.maps.event.trigger(map, 'resize');
    }, 200);
}