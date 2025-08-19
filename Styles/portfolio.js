//create new instance of split type
const myName = new SplitType('#display-name');

// gsap parameter is selector 

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.1,
    duration: .1
})