//Navigations

function scroll(id){
    let element = document.getElementById(id);
    element.scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("homeLink").addEventListener("click", function(){
    scroll("intro");
})
document.getElementById("aboutLink").addEventListener("click", function(){
    scroll("about");
})
document.getElementById("resumeLink").addEventListener("click", function(){
    scroll("resume-head");
})
document.getElementById("servicesLink").addEventListener("click", function(){
    scroll("service-head");
})
document.getElementById("skillsLink").addEventListener("click", function(){
    scroll("skill-head");
})
document.getElementById("projectsLink").addEventListener("click", function(){
    scroll("project-head");
})
document.getElementById("blogLink").addEventListener("click", function(){
    scroll("blog-head");
})
document.getElementById("contactLink").addEventListener("click", function(){
    scroll("contact-head");
})
document.getElementById("bt2").addEventListener("click",function(){
    scroll("project-head");
})



// Project Responsivness

document.querySelector("#spotify").addEventListener("click",function(){
    window.location.href = "https://sudhanshu9836.github.io/Spotify/";
})
document.querySelector("#linkedin").addEventListener("click",function(){
    window.location.href = "https://sudhanshu9836.github.io/Linkedin/";
})
document.querySelector("#netflix").addEventListener("click",function(){
    window.location.href = "https://sudhanshu9836.github.io/Netflix/";
})
document.querySelector("#simonsay").addEventListener("click",function(){
    window.location.href = "https://sudhanshu9836.github.io/Simon-say/";
})
document.querySelector("#todo").addEventListener("click",function(){
    window.location.href = "https://sudhanshu9836.github.io/To-do/";
})
document.querySelector("#photo").addEventListener("click",function(){
    window.location.href = "https://sudhanshu9836.github.io/Photo-Web/";
})

//Footer social icons
document.querySelector("#instagram").addEventListener("click",function(){
    window.location.href = "https://www.instagram.com/sudhanshu__tiwari_/";
})
document.querySelector("#twitter").addEventListener("click",function(){
    window.location.href = "https://twitter.com/sudhanshu9836";
})
document.querySelector("#github").addEventListener("click",function(){
    window.location.href = "https://github.com/sudhanshu9836";
})
document.querySelector("#linkedin-id").addEventListener("click",function(){
    window.location.href = "https://in.linkedin.com/in/sudhanshu--tiwari-";
})

//CV

document.getElementById("cv").addEventListener("click", function(){
    let path = "resume.pdf";
    let link = document.createElement('a');
    link.href = path;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

//Hire me
document.querySelector("#bt1").addEventListener("click",function(){
    window.location.href = "https://sudhanshutiwari9836@gmail.com";
})

//Blogs
document.querySelector("#b1").addEventListener("click",function(){
    window.location.href = "blog1.html";
})
document.querySelector("#b2").addEventListener("click",function(){
    window.location.href = "blog2.html";
})
document.querySelector("#b3").addEventListener("click",function(){
    window.location.href = "blog3.html";
})

//Animations

gsap.from("#d1, #d2, #my-desc",{
    x: -320,
    opacity: 0,
    duration: 1
})
gsap.from('.bt1, .bt2',{
    scale: 1.5,
    opacity: 0,
    duration: 1
})
gsap.from(".description-2 h3",{
    y: 130,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".description-2 h3",
        scroller: "body"
    }
})

gsap.from(".cards",{
    y: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body"
    }
})
gsap.from(".cards2",{
    y: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".cards2",
        scroller: "body"
    }
})
gsap.from(".r1",{
    x: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".r1",
        scroller: "body"
    }
})
gsap.from(".r2",{
    x: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".r2",
        scroller: "body"
    }
})
gsap.from(".b1",{
    scale: 1.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".b1",
        scroller: "body"
    }
})
gsap.from(".b2",{
    scale: 1.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".b2",
        scroller: "body"
    }
})
gsap.from(".contact-box",{
    scale: 1.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-box",
        scroller: "body"
    }
})
gsap.from(".blog",{
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".blog",
        scroller: "body"
    }
})