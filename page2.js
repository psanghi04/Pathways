//Note - this is dummy variable. use the same var name you stored inputted courses in.
let courses = ['MA26100','MA26500','MA16200','BIOL31200','AGR20100','CHM11500/11600','AGRY29000']



for (let i = 0; i < courses.length; i++) {
    let num;
   if (course_counter.get(courses[i])[0] === ("1")) {
    num = 1;
   } else if (course_counter.get(courses[i])[0] === '2') {
    num = 2;
   } else if (course_counter.get(courses[i])[0] === '3') {
    num = 3;
   }

    for (let j = 0; j < parseInt(course_counter.get(courses[i])[0]); j++) {
        switch (course_counter.get(courses[i])[1][j]) {
            case "Humanities":
                document.getElementById('Humanities').innerHTML += (courses[i]);
                break;
            case "Behavioural Science":
                document.getElementById('Behavioural-Science').innerHTML += (courses[i]+"<br>");
                break;
            case "Oral Communication":
                document.getElementById('Oral-Communication').innerHTML += (courses[i]+"<br>");
                break;
            case "Information Literacy":
                document.getElementById('Information-Literacy').innerHTML += (courses[i]+"<br>");
                break;
            case "Quantitative Reasoning":
                document.getElementById('Quantitative-Reasoning').innerHTML += (courses[i]+"<br>");
                break;
            case "Science":
                document.getElementById('Science').innerHTML += (courses[i]+"<br>");
                break;
            case "Science, Tech and Society":
                document.getElementById('Science-Tech-and-Society').innerHTML += (courses[i]+"<br>");
                break;
            case "Written Composition":
                document.getElementById('Written-Composition').innerHTML += (courses[i]+"<br>");
                break;
            case "Greater Issues in Science":
                document.getElementById('Greater-Issues-in-Science').innerHTML += (courses[i]+"<br>");
                break;
            case "Laboratory Science":
                document.getElementById('Laboratory-Science').innerHTML += (courses[i]+"<br>");
                break;
            case "Languages":
                document.getElementById('Languages').innerHTML += (courses[i]+"<br>");
                break;
            case "Technical Writing":
                document.getElementById('Technical-Writing').innerHTML += (courses[i]+"<br>");
                break;
            case "Technical Presentation":
                document.getElementById('Technical-Presentation').innerHTML += (courses[i]+"<br>");
                break;
            }
    }
}
