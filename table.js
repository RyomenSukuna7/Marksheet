function cal(e){
    e.preventDefault();
    let form =document.getElementById("formsvalue");
    form.style.display="none";

    let image =document.getElementById("logo");
    image.style.display="none";

    let h1 =document.getElementsByTagName("h1");
    for(let i=0;i<h1.length;i++){
        h1[i].style.display="none";
    }

    let line =document.getElementsByTagName("hr");
    for(let i=0;i<h1.length;i++){
        line[i].style.display="none";
    }

    let div =document.getElementsByTagName("div");
    for(let i=0;i<h1.length;i++){
        div[i].style.display="none";
    }

    document.body.style.backgroundImage="none";

    let name = document.getElementById("name1").value;
    let roll = document.getElementById("roll").value;
    let classes = document.getElementById("class").value;
    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);
    let s4 = parseFloat(document.getElementById("s4").value);
    let s5 = parseFloat(document.getElementById("s5").value);
    let s6 = parseFloat(document.getElementById("s6").value);
    let s7 = parseFloat(document.getElementById("s7").value);

    let table=document.createElement("table");
    table.setAttribute("border","2");
    table.setAttribute("style","width:100%;");

    let result=s1+s2+s3+s4+s5+s6+s7;
    let total=Math.round((result/700)*100);

    table.innerHTML=`

        <caption>Marksheet</caption>
        <tr>
            <th> Name </th>
            <th> Class </th>
            <th> Roll No </th>
            <th> Subject 1 </th>
            <th> Subject 2 </th>
            <th> Subject 3 </th>
            <th> Subject 4 </th>
            <th> Subject 5 </th>
            <th> Subject 6 </th>
            <th> Subject 7 </th>
        </tr>

        <tr>
            <td> ${name} </td>
            <td> ${classes} </td>
            <td> ${roll} </td>
            <td> ${s1} </td>
            <td> ${s2} </td>
            <td> ${s3} </td>
            <td> ${s4} </td>
            <td> ${s5} </td>
            <td> ${s6} </td>
            <td> ${s7} </td>
        </tr>

        <tr>

            <th class="percentage" colspan="10">Total</th>
        </tr>


        <tr>

            <td id="percentage" colspan="10">${total}%</td>
        </tr>
    
    `

    document.body.appendChild(table);
    
}