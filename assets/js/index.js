// async function getStatistics() {
//     let res=await fetch("http://universities.hipolabs.com/search?country=United+States");
//     let data=await res.json();
//     console.log(data);
// }

fetch("http://universities.hipolabs.com/search?country=United+States")
.then(res=>res.json())
.then(res=>{
    res.forEach(obj => {
         console.log(obj.name);
         console.log(obj.domains);
        console.log(obj.web_pages);
    });
})