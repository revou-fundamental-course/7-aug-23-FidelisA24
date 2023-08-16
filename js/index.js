//JS-->            
                //FUNGSI TAB//
                function openCity(evt, cityName) {
                  var i, tabcontent, pilihlink;
                  tabcontent = document.getElementsByClassName("tabcontent");
                  for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                  }
                  tablinks = document.getElementsByClassName("tablinks");
                  for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = pilihlink[i].className.replace(" active", "");
                  }
                  document.getElementById(cityName).style.display = "block";
                  evt.currentTarget.className += " active";                
                }
                document.getElementById("defaultOpen").click();

                //FUNGSI AREA//
                function calculateArea() {
                    var a = document.getElementById("heightInput").value;
                    var b = document.getElementById("baseInput").value;             
                
                    area_result = parseFloat(a) * parseFloat(b) / 2;
                    
                    document.getElementById("display").innerHTML = area_result;
                }

                //FUNGSI PERIMETER//
                function calculateCircumference() {
                    var a = (document.getElementById("a-input")).value;
                    var b = (document.getElementById("b-input")).value;
                    var c = (document.getElementById("c-input")).value;             
                
                    perimeter_result = parseFloat(a) + parseFloat(b) +parseFloat(c);
                    
                    document.getElementById("show").innerHTML = perimeter_result;
                }                 
                
