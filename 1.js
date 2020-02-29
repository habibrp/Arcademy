<!DOCTYPE html>
<html>
    <head>
        <title> Return biodata </title>
    </head>
    <body>
        <H1> Metode Yang Memilki dua parameter </H1>
        <p></p>
        <p></p>
        <p id="demo"></p>
       <script>
           function tulis(nama, umur) {
               document.getElementsByTagName ("p") [0].innerHTML="Habib Raditya Praba"
               document.getElementsByTagName ("p") [1].innerHTML= "24 Tahun"; 
           }
           tulis ();
       </script>
       <h1> Biodata </h1>
          <script>
              function return (Return) {
                  return "biodata";
              var text= '{"name : "Habib Raditya Praba", "age" : 24, "address" : "Serang", 
"hobbies" : ["lari", "basket", "sepeda"] "is married" : false, "list_school" : "{ "name" : "Universitas Muahmmadiyah Surakarta", "year_in" : 2013, "year_out" : 2019, "major" : "Ilmu Komunikasi"}, "skills" : {"skill_name" : "bahasa inggris", "level" : "advanced", "skill_name" : "desain", "level" : "advanced"}, "interest_in_coding" : true }';
var Obj = JSON.parse(text);
              document.getElementsByTagName ("p") [2]. innerHTML =
              Obj.name
              Obj.age
              Obj.addess
              Obj.hobbies
              Obj.list_school;
              }
              return ();
          </script>
          <script>
              var myObj, a,b,c,d,e,f,g,
              myObj = {name : "Habib Raditya Praba", age : 24, address : "Serang", hobbies :["lari", "basket", "renang"], "is_married" : false, list_school :  ["Universitas Muahmmadiyah Surakarta", 2013, 2019, "Ilmu Komunikasi" ], skill : ["bahasa inggris","advanced"]} ; 
              a=myObj.name
              b=myObj.age
              c=myObj.address
              d=myObj.hobbies
              e=myObj.is_married
              f=myObj.list_school
              g=myObj.skill
              document.getElementById("demo").innerHTML =a+","+b+ ","+c+","+d+","+e+","+f+","+g ;
          </script>
    </body>
</html>
