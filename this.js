// let hand={
//     blogs:[
//         {title: 'blog will show ur product',value:'34'},
//         {title: 'blog will show ur results',value:'32'},
         
        
//     ],
//     sum(){
//         console.log(this); },
//         logblog(){
//             this.blogs.forEach(blog =>{
//         console.log(blog.title,blog.value)
//     })

//         }
// }


// // console.log(blogs)
// hand.sum();
// hand.logblog();

const form_sub= document.getElementById('example_form');
console.log(form_sub)
form_sub.addEventListener("submit", (e) => {
    e.preventDefault();
    let fname=form_sub.name.value;
    let pattern =/^[a-zA-Z]*\s[a-zA-Z]{6,12}$/
    let res= pattern.test(fname);
    console.log(res);
})

//dates&times
const now = new Date("Jan 1 1970");
console.log(now.getTime());